/// <reference types="Cypress" />

//import Header from "./components/header.component"

class HomePage {

    static welcomeUserText() {
        const field = cy.contains('a', 'Welcome', {
            timeout: Cypress.env('elementTimeout')
        })
        return field
    } 

    static closeSmaatoBanner() {
        const field = cy.get('a:contains("X")', {
            timeout: Cypress.env('elementTimeout')
        })
        field.first().click()
        return this
    }
    
    static verifySuccessfulLogin() {
        this.welcomeUserText().should('be.visible').should('contain', 'Welcome Back')   
    }

    // static clickNewButton(buttonLabel: string) {
    //     const field = cy.get('.p-button-label', {
    //         timeout: Cypress.env('elementTimeout')
    //     })
    //     field.click()
    //     return this
    // }

    static clickButtonWithLabel(buttonLabel: string) {
        const field = cy.contains(buttonLabel, {
            timeout: Cypress.env('elementTimeout')
        })
        field.click()
        return this
    }

    static verifyRecord(recordName: string) {
        const field = cy.contains('a', recordName, {
            timeout: Cypress.env('elementTimeout')
        })
        field.should('be.visible');
        return this
    }

    static getFormattedDate() {
        let currentDatetime = new Date()
        let formattedDate = addLeadingZeros(currentDatetime.getDate()) +
                            (currentDatetime.toLocaleString('default', { month: 'short' })) + 
                            currentDatetime.getFullYear() + " " + 
                            addLeadingZeros(currentDatetime.getHours()) + ":" + 
                            addLeadingZeros(currentDatetime.getMinutes()) + ":" + 
                            addLeadingZeros(currentDatetime.getSeconds())

        return formattedDate
                            
        function addLeadingZeros(n) {
            if (n <= 9) {
                return "0" + n;
            }
            return n
        }
    }
}
export default HomePage;