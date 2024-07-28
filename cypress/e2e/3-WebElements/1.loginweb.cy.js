///<reference types="cypress" />
describe('verify the contact us page',function(){
    it('verify the contact us page using valid data',function(){

        // Arrangement
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // Action
        cy.get('[name="first_name"]').type("satya")
        cy.get('[name="last_name"]').type("koka")
        cy.get('[name="email"]').type('ammu.duggi123@gmail.com')
        cy.get('[name="message"]').type('I am learning cypress')
        cy.get('[type="submit"]').click()
        // Assertion
        cy.get('h1').should('have.text','Thank You for your Message!')
    })

    it('verify contact us page for invalid email',function(){
        // Arrangement
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // Action
        cy.get('[name="first_name"]').type("satya")
        cy.get('[name="last_name"]').type("koka")
        cy.get('[name="email"]').type('ammu.duggi')
        cy.get('[name="message"]').type('Hello')
        cy.get('[type="submit"]').click()
        // Assertion
        cy.contains('Error: Invalid email address').should('be.visible')

    })
})