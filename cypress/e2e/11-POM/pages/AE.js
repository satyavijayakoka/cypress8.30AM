export default class AEPage{
    selector = {
        url : "https://automationexercise.com/",
        loginSignUpBtn : 'a[href="/login"]',
        newSupName : '[data-qa="signup-name"]',
        newSupEmail : '[data-qa="signup-email"]',
        signUpBtn : '[data-qa="signup-button"]',

        // signUp Page
        mrs : '[value="Mrs"]',
        mr : '[value="Mr"]',
        pw : '[data-qa="password"]',
        Bday : '[data-qa="days"]',
        Bmonth : '[data-qa="months"]',
        Byear : '[data-qa="years"]',
        cBox1 : '#newsletter',
        cBox2 : '#optin',
        firstName : '[data-qa="first_name"]',
        lastName : '[data-qa="last_name"]',
        company : '[data-qa="company"]',
        address1 : '[data-qa="address"]',
        address2 : '[data-qa="address2"]',
        country : '[data-qa="country"]',
        state : '[data-qa="state"]',
        city : '[data-qa="city"]',
        zipcode : '[data-qa="zipcode"]',
        mobNo : '[data-qa="mobile_number"]',
        creatAccBtn : '[data-qa="create-account"]',

        // validation page
        accCreatedMsg : '[data-qa="account-created"] > b',
        continueBtn : '[data-qa="continue-button"]',

        // logout
        logout : 'a[href="/logout"]',

        //  login
        loginEmail : '[data-qa="login-email"]',
        loginPw : '[data-qa="login-password"]',
        loginBtn : '[data-qa="login-button"]'

    }

    // new User SignUp
    signUp(name1,email){
      cy.visit(this.selector.url)
      cy.get(this.selector.loginSignUpBtn).click()
      cy.get(this.selector.newSupName).type(name1)
      cy.get(this.selector.newSupEmail).type(email)
      cy.get(this.selector.signUpBtn).click()

    }
    // createUser fill data
    createUser(el){
      if(el.gender == "Mrs."){
        cy.get(this.selector.mrs).click()
      }
      else if(el.gender == "Mr."){
        cy.get(this.selector.mr).click()
      }

      cy.get(this.selector.pw).type(el.password)
      cy.get(this.selector.Bday).type(el.dayB)
      cy.get(this.selector.Bmonth).type(el.month)
      cy.get(this.selector.Byear).type(el.year)
      cy.get(this.selector.cBox1).click()
      cy.get(this.selector.cBox2).click()
      cy.get(this.selector.firstName).type(el.fn)
      cy.get(this.selector.lastName).type(el.ln)
      cy.get(this.selector.company).type(el.comny)
      cy.get(this.selector.address1).type(el.add1)
      cy.get(this.selector.address2).type(el.add2)
      cy.get(this.selector.country).type(el.country)
      cy.get(this.selector.state).type(el.state)
      cy.get(this.selector.city).type(el.city)
      cy.get(this.selector.zipcode).type(el.zipcode)
      cy.get(this.selector.mobNo).type(el.mobNo)
      cy.get(this.selector.creatAccBtn).click()
    }

    validation(css,msg){
      cy.get(css).should('have.text',msg)
    }

    btnClick(btncss){
      cy.get(btncss).click()
    }


}