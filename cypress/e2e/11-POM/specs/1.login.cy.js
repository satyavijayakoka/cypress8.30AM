///<reference types="cypress" />
import homep from "../pages/1.login"

describe('verify contact us page',function(){
    let hp = new homep()
    it('verify contact us page',function(){
        hp.visitUrl()
        hp.loginPage('vijayalakshmi','koka','ammu@gmail.com','i am learning cypress')
        hp.positiveValidation()
    })
})