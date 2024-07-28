///<reference types="cypress" />

describe('verify contact us page',function(){ // test scenario or test suite

    it('verify contact us page for valid data',function(){
        // AAA
        // Arrangement
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        // Action
        cy.get('[name="first_name"]').type('satya')
        cy.get('[name="last_name"]').type('koka')
        cy.get('[name="email"]').type('ammu.duggi@gmail.com')
        cy.get('[name="message"]').type('Hello satya')
        cy.get('[type="submit"]').click()

        // Assertion
        cy.get('h1').should('have.text','Thank You for your Message!')
    })

    // ============ JUNE 19th =================
    it('verify contact us page for invalid email',function(){
        // Arrangement
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
         // Action
        cy.get('[name="first_name"]').type('satya')
        cy.get('[name="last_name"]').type('koka')
        cy.get('[name="email"]').type('ammu.duggi')
        cy.get('[name="message"]').type('Hello satya')
        cy.get('[type="submit"]').click()

        // Assertion
        cy.contains('Error: Invalid email address').should('be.visible')
    })
    
    it('verify contact us page for incomplete data',function(){
        // Arrangement
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
         // Action
        cy.get('[name="first_name"]').type('satya')
        
        cy.get('[name="email"]').type('ammu.duggi')
        cy.get('[name="message"]').type('Hello satya')
        cy.get('[type="submit"]').click()

        // Assertion
        cy.contains('Error: all fields are required').should('be.visible')

    })

    it.only('verify contact us page for reset button',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('satya')
        cy.get('[name="last_name"]').type('koka')
        cy.get('[name="email"]').type('ammu.duggi@gmail.com')
        cy.get('[name="message"]').type('Hello satya')
        cy.get('[type="reset"]').click()

        cy.get('[name="first_name"]').should('have.text',"")
        cy.get('[name="last_name"]').should('have.text',"")
        cy.get('[name="email"]').should('have.text',"")
        cy.get('[name="message"]').should('have.text',"")


    })
})




















