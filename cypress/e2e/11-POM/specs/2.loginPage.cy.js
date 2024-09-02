///<reference types='cypress' />

import homeP from "../pages/2.loginPage"
import userD from "../../../fixtures/contactA3.json"

describe('verify contact us page using POM pages',()=>{
    let hp = new homeP()

    it('contact us page',()=>{
        hp.visitUrl()
        hp.loginPage('vijayalakshmi','koka','ammu@gmail.com','i am learning POM')
        hp.loginSuccess()

    })

    it('contact us page',()=>{
        hp.visitUrl()
        hp.loginPage('vijayalakshmi','koka','ammugmail.com','i am learning POM')
        hp.loginError()
        
    })

    userD.forEach((el,index)=>{
        it(`contact us page using fixture payload for user ${el.firstName}`,()=>{
            hp.visitUrl()
            hp.loginPage(el.firstName,el.lastName,el.email,el.msg)
            hp.loginSuccess()
        })

    })
})