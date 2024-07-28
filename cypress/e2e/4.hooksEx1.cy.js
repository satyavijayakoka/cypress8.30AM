///<reference types="cypress" />
describe('verify contact us page ',function(){

    beforeEach(function(){
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    })
    it('verify contact us page for valid data',function(){
        // cy.get('[name="first_name"]').type("satya")
        // cy.get('[name="last_name"]').type("koka")
        // cy.get('[name="email"]').type("ammu.duggi123@gmail.com")
        // cy.get('[name="message"]').type("i am learning cypress")
        // cy.get('[type="submit"]').click()
         
        cy.contactUs("satya","koka","ammu.duggi123@gmail.com","i am learning cypress",'[type="submit"]')
        cy.get('h1').should('have.text',"Thank You for your Message!")

    })
    it('verify contact us page for invalid email',function(){
        // cy.get('[name="first_name"]').type("satya")
        // cy.get('[name="last_name"]').type("koka")
        // cy.get('[name="email"]').type("ammu.duggi")
        // cy.get('[name="message"]').type("i am learning cypress")
        // cy.get('[type="submit"]').click()
        
        cy.contactUs("satya","koka","ammu.duggi","i am learning cypress",'[type="submit"]')
        cy.contains('Error: Invalid email address').should('be.visible')

    })
    it('verify contact us page for incomplete data',function(){
        cy.get('[name="first_name"]').type("satya")
        
        cy.get('[name="email"]').type("ammu.duggi123@gmail.com")
        cy.get('[name="message"]').type("i am learning cypress")
        cy.get('[type="submit"]').click()

        cy.contains('Error: all fields are required').should('be.visible')

    })
    it('verify contact us page for reset button',function(){
        // cy.get('[name="first_name"]').type("satya")
        // cy.get('[name="last_name"]').type("koka")
        // cy.get('[name="email"]').type("ammu.duggi123@gmail.com")
        // cy.get('[name="message"]').type("i am learning cypress")
        // cy.get('[type="reset"]').click()
        
        cy.contactUs("satya","koka","ammu.duggi123@gmail.com","i am learning cypress",'[type="reset"]')
        
        cy.get('[name="first_name"]').should('have.text',"")
        cy.get('[name="last_name"]').should('have.text',"")
        cy.get('[name="email"]').should('have.text',"")
        cy.get('[name="message"]').should('have.text',"")

    })
})


























