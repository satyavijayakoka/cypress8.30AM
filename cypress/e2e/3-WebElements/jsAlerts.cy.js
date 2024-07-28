///<reference types="cypress" />
//js alert ,we can not inspect
//window:alert()
//window:confirm()
//window:prompt()
describe('handling js alerts',function(){
    it('handling window:alert',function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        // handle alert
        cy.on('window:alert',function(text){
            expect(text).to.eq('I am a JS Alert')
            return true
        })
        // trigger event
        cy.get('[onclick="jsAlert()"]').click()
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    it('handling window:confirm',function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.on('window:confirm',function(text){
            expect(text).to.eq('I am a JS Confirm')
            return true
        })
        cy.get('[onclick="jsConfirm()"]').click()
        cy.get('#result').should('have.text','You clicked: Ok')

    })

    it('handling window:confirm',function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.on('window:confirm',function(text){
            expect(text).to.eq('I am a JS Confirm')
            return false
        })
        cy.get('[onclick="jsConfirm()"]').click()
        cy.get('#result').should('have.text','You clicked: Cancel')
    })

    it('handling window:prompt',function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then(function(win){
          cy.stub(win,'prompt').returns('i am learning cypress')
          return true
        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text','You entered: i am learning cypress')
    })

    it.only('handling window:prompt',function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then(function(win){
          cy.stub(win,'prompt').returns('null')
          return false
        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text','You entered: null')
    })
})