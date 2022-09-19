/// <reference types="Cypress" />

class PaymentInfoPage {

// Payment Information page

    static openPaymentInfoPage() {
        //cy.visit(Cypress.env('spxURL')+'index.html#/payment-information')

        cy.get('.userItem > .pi').trigger('mouseover')
        cy.contains('Payment Information').should('be.visible').click()

        //body > app-root > div > spx-top-menu > div.right-menu > p-menu > div > ul > li:nth-child(5) > a

        // cy.get('.pi pi-chevron-down').click()
        // cy.clickUserMenuItem('Payment Information')
        //cy.frameLoaded({ url: '/payment-information' })
    }

    // static fillOrderName(name: string) {
    //     const field = cy.get('.col-6 > .p-inputtext', {
    //         timeout: Cypress.env('elementTimeout')
    //     })
    //     field.type(name)
    //     return this
    // }


} export default PaymentInfoPage