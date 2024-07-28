///<reference types="cypress" />
describe('verify login page for OHRM',function(){
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    it('verify login page of OHRM for valid data',function(){
        // cy.get('[name="username"]').type("Admin")
        // cy.get('[name="password"]').type("admin123")
        // cy.get('[type="submit"]').click()
        
        cy.OHRMLogin("Admin","admin123")

        cy.get(' .oxd-topbar-header-breadcrumb-module').should('have.text',"Dashboard")

    })
    it('verify login page of OHRM for invalid data',function(){
        // cy.get('[name="username"]').type("Admin")
        // cy.get('[name="password"]').type("admin")
        // cy.get('[type="submit"]').click()
        
        cy.OHRMLogin("Admin","admin")

        cy.get('.oxd-alert-content-text').should('have.text',"Invalid credentials")

    })
})



















