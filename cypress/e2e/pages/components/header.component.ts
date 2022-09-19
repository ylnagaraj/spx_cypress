/// <reference types="Cypress" />

class Header {

    static logout() {
        this.clickUserMenuItem("Logout")
    }

    static clickHeaderMenuItem(menuLabel: string) {
        const field = cy.contains("a", menuLabel, {
            //cy.get(':nth-child(2) > .p-menuitem-link', {
            timeout: Cypress.env('elementTimeout')
        })
        field.click()
        return this
    } 

    static clickUserEmail() {
        
        const email = Cypress.env('loginEmail').split('@')
        const field = cy.get('a').contains(email[0])
        // cy.get('.userItem > .pi', {
        //     //cy.get('.userItem'
        //     timeout: Cypress.env('elementTimeout')
        
        field.trigger('mouseover')
        //field.click()
        return this
    }

    static clickUserMenuItem(itemLabel: string) {
        this.clickUserEmail()
        const field = cy.contains(itemLabel, {
            timeout: Cypress.env('elementTimeout')
        })
        field.click()
        return this
    }

    static getUserMenuItem() {
        cy.get("a").each($a => {
            const message = $a.text();
            cy.log("label# " + message)
       })
    }    
}
export default Header;