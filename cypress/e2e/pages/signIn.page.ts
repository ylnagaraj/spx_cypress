/// <reference types="Cypress" />

import HomePage from "./home.page"

class SignInPage {

    static launchApp() {
        cy.visit(Cypress.env('spxURL'))
    }
    
    static fillEmail (value: string) {
        const field = cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .cognito-asf > :nth-child(3) > #signInFormUsername', {
            //signInFormUsername
            timeout: Cypress.env('elementTimeout')
        })
        field.type(value)
        return this
    }

    static fillPassword (value: string) {
        const field = cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .cognito-asf > :nth-child(5) > #signInFormPassword', {
            //signInFormPassword
            timeout: Cypress.env('elementTimeout')
        })
        field.type(value)
        return this
    }

    static clickSignInButton() {
        const field = cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .cognito-asf > .btn', {
            timeout: Cypress.env('elementTimeout')
          })
          field.click()
          return this
    }

    static clickSkipMFALink() {
        const field = cy.get('.skip-link', {
            timeout: Cypress.env('elementTimeout')
        })
        field.click()
        return this
    }
    
    static signInApp(email: string, password: string) {
        
        this.launchApp()
        this.fillEmail(email)
        this.fillPassword(password)
        this.clickSignInButton()

        //HomePage.clickButtonWithLabel('Sign in')

        this.clickSkipMFALink()
        //HomePage.closeSmaatoBanner()
        HomePage.verifySuccessfulLogin()
    }

}
export default SignInPage;