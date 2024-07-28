///<reference types="cypress" />
describe('verify radio button',function(){
    it('verify radio button',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="blue"]').check().should('be.checked')
        cy.get('[value="purple"]').check().should('be.checked')
        cy.get('[value="blue"]').should('not.be.checked')

        //cy.get('input[value="orange"]').click().should('be.checked')

        // if "orange " element is more than one use traverse methods
        cy.get('#radio-buttons').find('[value="orange"]').click().should('be.checked')

        cy.get('[value="purple"]').should('not.be.checked')

    })

    it('verify radio btn letkodiet',function(){
        cy.visit('https://www.letskodeit.com/practice')

        cy.get('[id="bmwradio"]').should('not.be.checked')
        cy.get('[id="bmwradio"]').click().should('be.checked')
        cy.get('[id="benzradio"]').click().should('be.checked')
        cy.get('[id="bmwradio"]').should('not.be.checked')


    })

    it('verify checkbox for webdriver university',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="option-3"]').should('be.checked')
        cy.get('[value="option-3"]').uncheck().should('not.be.checked')

        cy.get('[value="option-2"]').click().should('be.checked')
        cy.get('[value="option-2"]').click().should('not.be.checked')

    })

    it('verify radio button letkodeit',function(){
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('[id="bmwcheck"]').should('not.be.checked')
        cy.get('[id="bmwcheck"]').click().should('be.checked')
        cy.get('[id="hondacheck"]').click().should('be.checked')
        cy.get('[id="benzcheck"]').click().should('be.checked')
        cy.get('[id="benzcheck"]').click().should('not.be.checked')
        
       })

    it.only('verify radio button/checkbox-Amazon',function(){
        cy.visit('https://www.amazon.in/')
        cy.get('[class="nav-line-2"]').first().click()
        cy.get('[value="hi_IN"]').click({force: true})
        cy.get('[value="te_IN"]').click({force: true})
    })
})


















