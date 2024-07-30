///<reference types='cypress' />

describe('verify file download',function(){
  
    it('verify download file by cy.readFile()',function(){
        cy.visit('http://autopract.com/selenium/download.html')
        cy.get('#download').click()
        cy.readFile('cypress/downloads/sample2.csv', {timeout: 60000}).should('contain','Eldon Base') 
    })

    it.only('verify download file by plugin',function(){
        cy.visit('http://autopract.com/selenium/download.html')
        cy.get('#download').click()
        cy.verifyDownload('sample2.csv') //only file name requires not path
        //here by default it will create download folder in cypress folder and download file in it
    })
})

