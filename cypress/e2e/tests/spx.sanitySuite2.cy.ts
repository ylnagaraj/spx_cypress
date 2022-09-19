/// <reference types="Cypress" />

// import AppNAddSpacePage from '../pages/inventory/newAppNAdSpace.page'
// import PaymentInfoPage from '../pages/userMenu/paymentInformation.page'

describe('Smoke Test Suite 1', () => {
    before(() => {
        cy.signIn(Cypress.env('loginEmail'), Cypress.env('loginPassword'))
        //cy.wait(2000)
    });

    // afterEach(() => {
    //     //cy.logout()
    // });

    xit('check logout', () => {
        cy.get('.userItem > .pi').click();
        cy.wait(2000)
        cy.get(':nth-child(1) > .p-ripple > .p-menuitem-text').click();
        cy.wait(2000)
        cy.get('.p-button-label').click();
        cy.get('.p-button-label').click();
        cy.get('.p-message-close-icon').click();
        cy.wait(2000)

    })

    it('payment info iframe', () => {

        cy.clickUserMenuItem('Payment Information')
        cy.wait(10000)
        cy.frameLoaded({ url: '#/payment-information' })
        cy.iframe().find('#EmailAddress').should('be.visible')
    })

    xit('Login Test', () => {
        cy.log('########### Login Test ###############')
        //cy.get('.userItem > .pi').click()
        // cy.get('.userItem').trigger
        // cy.wait(1000)
        // cy.contains('Logout').click
        /* ==== Generated with Cypress Studio ==== */
        // cy.wait(2000)
        // cy.get('.userItem > .pi').click();
        // cy.get(':nth-child(1) > .p-ripple > .p-menuitem-text').click();
        // cy.get('.p-button-label').click();
        // cy.get('.p-message-close-icon').click();
        // cy.get('.p-menudark > .p-menu-list > :nth-child(1) > .p-menuitem-link > .p-menuitem-text').click();
        cy.get('.p-button-label').click();
        cy.get('.p-dropdown-label').click();
        cy.get(':nth-child(6) > .p-ripple > .ng-star-inserted').click();
        cy.get(':nth-child(2) > .p-element > .p-radiobutton > .p-radiobutton-box').click();
        cy.get(':nth-child(3) > .p-element > .p-radiobutton > .p-radiobutton-box').click();
        cy.get(':nth-child(1) > .p-element > .p-radiobutton > .p-radiobutton-box').click();
        cy.get('.p-checkbox-box').click();
        //cy.get('.p-button-label').click();
        cy.get('.cancel-link').click();

        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.userItem > .pi').click();
        cy.get(':nth-child(5) > .p-ripple > .p-menuitem-text').click();
        /* ==== End Cypress Studio ==== */
    })

    xit('Add New App and an Ad Space', () => {
        cy.log('start recording')
        //AppNAddSpacePage.createNewApp('iOS', 'New Age App', '', '└ Movies (IAB1-5)', 'https://www.smaato.com')
        //AppNAddSpacePage.createNewAdSpace('adspace1', '', 'Top', 'dimension', 'movies', 'Top', true, 'save')

        // cy.get('#cars_list option').then(options => {
        //     const actual = [...options].map(o => o.value)
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(2) > .p-menuitem-link > .p-menuitem-text').click();
        cy.get('.p-button-label').click();
        //cy.get(':nth-child(4) > .col-10 > .p-inputtext').clear('T');
        cy.get(':nth-child(4) > .col-10 > .p-inputtext').type('Test App2');
        //cy.get(':nth-child(8) > .col-10 > .p-inputtext').clear('w');
        cy.get(':nth-child(8) > .col-10 > .p-inputtext').type('www.google.com');
        cy.get('.p-dropdown-label').click();
        cy.get(':nth-child(5) > .p-ripple > .ng-star-inserted').click();
        cy.get('.p-checkbox-box').click();
        cy.get('.p-button-label').click();
        //cy.get('.col-4 > .p-inputtext').clear('A');
        cy.get('.col-4 > .p-inputtext').type('Adspace Top');
        cy.get('.p-inputtextarea').click();
        cy.get(':nth-child(4) > .col-6 > .p-element > .p-dropdown > .p-dropdown-label').click();
        cy.get('#pr_id_6_list > :nth-child(1) > .p-ripple > .ng-star-inserted').click();
        cy.get('.auto-width > .ui-dimension-dropdown > .p-dropdown-trigger > .p-dropdown-trigger-icon').click();
        cy.get(':nth-child(5) > .ng-tns-c62-51').click();
        cy.get('#pr_id_7_label').click();
        cy.get(':nth-child(6) > .p-ripple > .ng-star-inserted').click();
        cy.get('.col-6 > .p-element > .p-checkbox > .p-checkbox-box > .p-checkbox-icon').click();
        cy.get('.col-6 > .p-element > .p-checkbox > .p-checkbox-box').click();
        cy.get('[icon="pi pi-check"] > .p-button-label').click();
        /* ==== End Cypress Studio ==== */
    })

    /* ==== Test Created with Cypress Studio ==== */
    xit('recordTest', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.userItem').click();
        cy.get('.userItem > .pi').click();
        cy.get('.userItem > .pi').click();
        //cy.get(':nth-child(13) > .p-menuitem-link').click();
        //cy.get('.p-button-label').click();
        /* ==== End Cypress Studio ==== */


        /* ==== Generated with Cypress Studio ==== */
        cy.get('.p-menudark > .p-menu-list > :nth-child(4) > .p-menuitem-link > .p-menuitem-text').click();
        cy.get('.p-button-label').click();
//        cy.get('.col-6 > .p-inputtext').clear('T');
        cy.get('.col-6 > .p-inputtext').type('Test Order1 - 9Sep22');
//        cy.get('.p-dropdown-label').clear('T');
        cy.get('.p-dropdown-label').type('Test Advertiser1');
        cy.get('.p-inputtextarea').click();
        cy.get('.toggle-switch').click();
        cy.get('.toggle-off').click();
        cy.get('[label="Save"] > .p-button-label').click();
        cy.get('.p-menu-list > :nth-child(3) > .p-menuitem-link > .p-menuitem-text').click();
        cy.get('[icon="pi pi-plus"] > .p-button-label').click();
//        cy.get('.col-6 > .p-inputtext').clear('T');
        cy.get('.col-6 > .p-inputtext').type('Test LineItem1 - 9Sep22');
        cy.get('.p-inputtextarea').click();
        cy.get('#pr_id_46_label').click();
        cy.get('#p-highlighted-option > .ng-star-inserted').click();
        cy.get('.col-10 > spx-toggle.ng-untouched > .toggle > .toggle-slider > .toggle-switch').click();
        cy.get('.ng-dirty > .toggle > .toggle-slider > .toggle-off').click();
        cy.get('.col-10 > .p-inputwrapper > .p-dropdown > .p-dropdown-trigger > .p-dropdown-trigger-icon').click();
        cy.get(':nth-child(10) > .p-ripple > .ng-star-inserted').click();
        cy.get('#pr_id_43_label').click();
        cy.get('#pr_id_43_list > :nth-child(4) > .p-ripple > .ng-star-inserted').click();
//        cy.get(':nth-child(4) > :nth-child(2) > .p-inputtext').clear('9');
        cy.get(':nth-child(4) > :nth-child(2) > .p-inputtext').type('90');
        cy.get(':nth-child(4) > .left').click();
        cy.get('.p-calendar > .ng-tns-c112-72').click();
        cy.get(':nth-child(2) > :nth-child(7) > .p-ripple').click();
        cy.get('.p-calendar > .ng-tns-c112-73').click();
        cy.get(':nth-child(3) > :nth-child(6) > .p-ripple').click();
        cy.get('.input-container > .p-element > .p-checkbox > .p-checkbox-box').click();
        cy.get('.input-container > .p-element > .p-checkbox > .p-checkbox-box > .p-checkbox-icon').click();
        cy.get('[label="Targeted eCPM"] > .p-radiobutton > .p-radiobutton-box').click();
        cy.get('[label="Floor Price"] > .p-radiobutton > .p-radiobutton-box').click();
        //cy.get('.col-3.ng-star-inserted > .ui-grid > :nth-child(2) > .col-8 > .p-inputtext').clear('1');
        cy.get('.col-3.ng-star-inserted > .ui-grid > :nth-child(2) > .col-8 > .p-inputtext').type('10');
        cy.get('.col-10 > .p-element > .p-checkbox > .p-checkbox-box > .p-checkbox-icon').click();
        cy.get('.col-10 > .p-element > .p-checkbox > .p-checkbox-box').click();
        cy.get('#p-tabpanel-1-label > .p-tabview-title').click();
        cy.get('#p-tabpanel-2-label > .p-tabview-title').click();
        cy.get('spx-smx-categories > .p-settingsbox-panel > .p-settingsbox-content > spx-treetable-wrapper > .treetable-container > p-treetable.p-element > .p-treetable > .p-treetable-wrapper > table > .p-treetable-tbody > :nth-child(1) > td > .p-button-small > .p-button-label').click();
        cy.get('#p-tabpanel-3-label > .p-tabview-title').click();
        cy.get('#pr_id_23-table > .p-datatable-tbody > :nth-child(1) > td > :nth-child(2) > .p-element > .p-button-label').click();
        cy.get('#pr_id_23-table > .p-datatable-tbody > :nth-child(4) > td > :nth-child(2) > .p-element > .p-button-label').click();
        cy.get(':nth-child(1) > spx-treetable-wrapper > .treetable-container > p-treetable.p-element > .p-treetable > .p-treetable-wrapper > table > .p-treetable-tbody > :nth-child(1) > td > p-treetabletoggler.p-element > .p-ripple > .pi').click();
        cy.get(':nth-child(1) > spx-treetable-wrapper > .treetable-container > p-treetable.p-element > .p-treetable > .p-treetable-wrapper > table > .p-treetable-tbody > :nth-child(1) > td > .p-button-small > .p-button-label').click();
        cy.get('#p-accordiontab-5 > .p-accordion-toggle-icon').click();
        cy.get('#p-accordiontab-5 > .p-accordion-toggle-icon').click();
        cy.get(':nth-child(1) > spx-treetable-wrapper > .treetable-container > p-treetable.p-element > .p-treetable > .p-treetable-wrapper > table > .p-treetable-tbody > :nth-child(3) > td > p-treetabletoggler.p-element > .p-ripple > .pi').click();
        cy.get(':nth-child(1) > spx-treetable-wrapper > .treetable-container > p-treetable.p-element > .p-treetable > .p-treetable-wrapper > table > .p-treetable-tbody > :nth-child(4) > td > .p-button-small > .p-button-label').click();
        cy.get('#p-tabpanel-5-label > .p-tabview-title').click();
        cy.get(':nth-child(98) > td > :nth-child(2) > .p-element > .p-button-label').click();
        cy.get('#p-tabpanel-6-label > .p-tabview-title').click();
        cy.get('[formcontrolname="ageRangeStart"]').click();
        cy.get('.inputs > .ng-dirty').clear();
        cy.get('.inputs > .ng-dirty').type('18');
        cy.get('.inputs > .ng-pristine').click();
        cy.get('.inputs > .ng-untouched').clear();
        cy.get('.inputs > .ng-untouched').type('50');
        cy.get('.age-fields').click();
        cy.get('.age-fields > .p-button-small > .p-button-label').click();
        cy.get('#p-tabpanel-7-label > .p-tabview-title').click();
        cy.get(':nth-child(76) > td > p-treetabletoggler.p-element > .p-ripple > .pi').click();
        cy.get('.p-treetable-tbody > :nth-child(79) > td > .p-button-small > .p-button-label').click();
        cy.get('#p-tabpanel-8-label > .p-tabview-title').click();
        cy.get(':nth-child(1) > :nth-child(2) > .device-version-dropdown > .p-inputwrapper > .p-dropdown > .p-dropdown-trigger > .p-dropdown-trigger-icon').click();
        cy.get(':nth-child(29) > .p-ripple > .ng-star-inserted').click();
        cy.get(':nth-child(2) > :nth-child(2) > .device-version-dropdown > .p-inputwrapper > .p-dropdown > .p-dropdown-trigger > .p-dropdown-trigger-icon').click();
        cy.get(':nth-child(14) > .p-ripple > .ng-star-inserted').click();
        cy.get(':nth-child(1) > [style="float: right;"] > .p-element > .p-button-label').click();
        cy.get(':nth-child(1) > [style="float: right;"] > .p-element > .p-button-label').click();
        cy.get('[icon="pi pi-check"] > .p-button-label').click();
        cy.get(':nth-child(2) > :nth-child(1) > .entity-name-column > .entity-name-column__wrapper > .entity-name-column__wrapper__content').click();
//        cy.get('.col-6 > .p-inputtext').clear('Test LineItem1 - 9Sep22');
        cy.get('.col-6 > .p-inputtext').type('Test LineItem1 - 09Sep22');
        cy.get('[icon="pi pi-check"] > .p-button-label').click();
        /* ==== End Cypress Studio ==== */
    });

    xit('record iframe', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.userItem').click();
        cy.get('.userItem').click();
        cy.get(':nth-child(5) > .p-ripple > .p-menuitem-text').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > .p-menuitem-link > .p-menuitem-text').click();
        cy.get('.tooltip-area').click();
        cy.get('[transform="translate(157.01612903225805,20)"] > text').click();
        cy.get('.tooltip-area').click();
        cy.get('.tooltip-area').should('be.visible');
        /* ==== End Cypress Studio ==== */
    })
})