/// <reference types="cypress"/>

describe('verify the contactus page', function () { // scenario

    it('verify the contact us page using valid data', function () { // test case
        // AAA - Arrangement, Action, Assertion
        // Arrangement
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // Action
        cy.get('input[name="first_name"]').type("satya")
        cy.get('input[name="last_name"]').type("koka")
        cy.get('input[name="email"]').type("ammu.duggi123@gmail.com")
        cy.get('textarea[name="message"]').type("i am learning cypress")
        cy.get('input[type ="submit"]').click()
        // Assertion
        cy.get('h1').should('have.text', "Thank You for your Message!")

    })

})
