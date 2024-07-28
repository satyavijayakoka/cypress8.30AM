///<reference types="cypress" />
describe('verify DOM element using various functions',function(){
    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    })
    it('to get DOM element within element using .children()',function(){
        cy.get('.traversal-drinks-list').children().should('have.length',5)
    })

    it('to get DOM element within element using .first()',function(){
        cy.get('.traversal-drinks-list').children().first().should('have.text','Coffee')
    })

    it('to get DOM element within element using .last()',function(){
        cy.get('.traversal-drinks-list').children().last().should('have.text','Sugar')
    })

    it('to get DOM element within element using .eq(index)',function(){
        cy.get('.traversal-drinks-list').children().eq(1).should('have.text','Tea')
    })

    it('to get DOM element within element using .eq(index)',function(){
        cy.get('.traversal-drinks-list').children().eq(2).should('have.text','Milk')
    })

    it('to get DOM element within element using .prev()',function(){
        cy.get('#milk').prev().should('have.text','Tea')
    })

    it('to get DOM element within element using .next()',function(){
        cy.get('#milk').next().should('have.text','Espresso')
    })

    it('to get DOM element within element using .prevAll()',function(){
        cy.get('#espresso').prevAll().should('have.length',3)
    })

    it('to get DOM element within element using .nextAll()',function(){
        cy.get('#tea').nextAll().should('have.length',3)
    })

    it('to get DOM element within element using .siblings()',function(){
        cy.get('#tea').siblings().should('have.length',4)
    })

    it('to get DOM element within element using .siblings()',function(){
        cy.get('.traversal-food-list').siblings().should('have.length',5)
    })

    it.only('to get DOM element within element using parent()',function(){
        cy.get('#fruits').parent()
        cy.get('#fruits').parents().should('have.length',6)
        cy.get('#fruits').parents().should('match','body')
        cy.get('#fruits').parents().should('match','[class="container"]')
        cy.get('#fruits').parents().should('match','[class="col-sm-12"]')
    })
})


























