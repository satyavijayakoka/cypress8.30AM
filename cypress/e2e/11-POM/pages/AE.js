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
        creatAccBtn : '[data-qa="create-account"]'

    }

    // new User SignUp
    signUp(name1,email){
      cy.visit(this.selector.url)
      cy.get(this.selector.loginSignUpBtn).click()
      cy.get(this.selector.newSupName).type(name1)
      cy.get(this.selector.newSupEmail).type(email)
      cy.get(this.selector.signUpBtn).click()

    }

}