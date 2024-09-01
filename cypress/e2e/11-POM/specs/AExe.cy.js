///<reference types="cypress" />
import homePage from "../pages/AE"
import data from "../../../fixtures/payloadAE"

describe('verify E2E testing',function(){
    let hp = new homePage()
    data.forEach((el,index) => {
      it('automation login test',function(){
        hp.signUp(el.name, el.email)
        hp.createUser(el)
        hp.validation(hp.selector.accCreatedMsg,'Account Created!')
        hp.btnClick(hp.selector.continueBtn)
        hp.btnClick(hp.selector.logout)
        hp.loginUser(el)
        hp.validateLoginUser(el)
      })
    })
})