///<reference types="cypress" />
describe('verify iFrame in cypress', function () {
    it('verify iFrame using jquery', function () {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        // cy.get('a[href="index.html"]').should('have.text','Home')
        cy.get('#frame').then(function ($frame) {
            //cy.log($frame)
            //cy.log($frame.contents())
            let iFrameBody = $frame.contents().find('body')
            //cy.log(iFrameBody)
            cy.wrap(iFrameBody).as('iframe')
            cy.get('@iframe').find('a[href="index.html"]').should('have.text', 'Home')

        })

    })
    it('verify iframe using javascript', function () {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        // cy.get('a[href="index.html"]').should('have.text','Home')
        cy.get('#frame').then(function (frame) {
            cy.log(frame[0].contentDocument.body)
            let iFrameBody = frame[0].contentDocument.body
            cy.wrap(iFrameBody).as('iframe')
            cy.get('@iframe').find('a[href="index.html"]').should('have.text', 'Home')

        })
    })

    it('verify iframe by its function', function () {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        let iFrameBody = cy.get('#frame').its('0.contentDocument.body').then(cy.wrap)
        iFrameBody.find('a[href="index.html"]').should('have.text', 'Home')
    })

    it('verify iframe by Utility function', function () {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.getIFrameBody('#frame').find('a[href="index.html"]').should('have.text', 'Home')

    })

    it.only('verify iframe letkodiet', function () {
        cy.visit('https://www.letskodeit.com/practice')
        cy.getIFrameBody('#courses-iframe').find('[class="dynamic-heading margin-bottom-20"]').should('have.text','All Courses')
    })
})