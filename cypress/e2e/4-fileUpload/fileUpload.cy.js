///<reference types="cypress" />
describe('verify file upload in cypress',function(){
    it('single file upload',function(){
        cy.visit('https://www.webdriveruniversity.com/File-Upload/index.html')
        let path1 = 'cypress/e2e/4-fileUpload/info.txt'
        cy.get('input[id="myFile"]').selectFile(path1)

        cy.on('window:alert',function(text){
            expect(text).to.eq('Your file has now been uploaded!')
            return true
        })
        cy.get('#submit-button').click()
        cy.url().should('contain','info.txt')

    })

    it('single file upload',function(){
        cy.visit('https://www.webdriveruniversity.com/File-Upload/index.html')
        let path1 = '/Users/madhuduggirala/Downloads/aml_course.pdf'
        cy.get('input[id="myFile"]').selectFile(path1)

        cy.on('window:alert',function(text){
            expect(text).to.eq('Your file has now been uploaded!')
            return true
        })
        cy.get('#submit-button').click()
        cy.url().should('contain','course.pdf')
    })
    it.only('multiple file upload',function(){
        cy.visit('https://www.zoho.com/in/books/accounting-software-demo/#/salesorders/new')
        let path1 = 'cypress/e2e/4-fileUpload/info.txt'
        let path2 = '/Users/madhuduggirala/Downloads/aml_course.pdf'

        cy.get('input[type="file"]').first().selectFile([path1,path2])
        cy.get('[id="ember355"]').should('contain','2')
    })
})