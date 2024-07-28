///<reference types="cypress" />
describe('practice exampes',function(){
    it('amazon prime',function(){
        cy.visit('https://www.amazon.com/Amazon-Video/b/?&node=2858778011&ref=dvm_MLP_ROWNA_US_1')
        cy.get('[aria-label="Search Amazon"]').click()
        

    })
})