///<reference types="cypress" />
describe('verify environments in cypress',function(){
    it('verify environments in cypress',function(){
        // cy.visit('https://practice.automationtesting.in/my-account/')
        // cy.get('[id="username"]').type('prodTesting@gmail.com')
        // cy.get('[id="password"]').type('Satya@123')
        // cy.get('[name="login"]').click()
        // let email = 'prodTesting@gmail.com'
        // let uemail = email.split('@') // ['prodTesting','gmail.com']
        // cy.log(uemail[0])
        // cy.get('strong').should('have.text',uemail[0])
        // this is for normal way --- npx cypress open

        cy.visit('/my-account/')
        cy.get('[id="username"]').type(Cypress.env('uid'))
        cy.get('[id="password"]').type(Cypress.env('pw'))
        cy.get('[name="login"]').click()
        let email = Cypress.env('uid')
        let uid1 = email.split('@')
        cy.get('strong').should('have.text',uid1[0])
    })
})


// first way using npx cypress open 
// npx cypress open --config-file stage.config.js
// npx cypress open --config-file prod.config.js 

//second way

///Users/madhuduggirala/Desktop/cypress8.30am/cypress/e2e/3-WebElements/environments.cy.js
//npx cypress run --spec "/Users/madhuduggirala/Desktop/cypress8.30am/cypress/e2e/3-WebElements/environments.cy.js" --browser chrome --headed --config-file stage.config.js
//npx cypress run --spec "/Users/madhuduggirala/Desktop/cypress8.30am/cypress/e2e/3-WebElements/environments.cy.js" --browser chrome --headed --config-file prod.config.js

//third way
//third way to create short cut command
// create below script command in package.json
// "stage-env-test" : "npx cypress run --spec cypress/e2e/3-webElements/22.environments.cy.js --browser chrome --headed --config-file stage.config.js",
// "prod-env-test" : "npx cypress run --spec cypress/e2e/3-webElements/22.environments.cy.js --browser chrome --headed --config-file prod.config.js",
 
//and run following command on cli
//npm run stage-env-test
//npm run prod-env-test