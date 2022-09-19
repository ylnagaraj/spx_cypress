/// <reference types="Cypress" />

import AppNAdSpacePage from '../pages/inventory/newAppNAdSpace.page'
import CreateOrderPage from '../pages/direct/newOrder.page'
import SanityTestData from '../testdata/sanitySuite.testdata'
import HomePage from '../pages/home.page';

describe('Sanity Test Suite 1', () => {
    before(() => {
        cy.signIn(Cypress.env('loginEmail'), Cypress.env('loginPassword'))
        cy.wait(2000)
    });

    after(() => {
        cy.logout()
    });

    it('Add New App and an Ad Space', () => {

        cy.clickHeaderMenuItem('Inventory')

        var app = SanityTestData.TC001_AppData
        var space = SanityTestData.TC001_AdSpaceData

        AppNAdSpacePage.createNewApp(app['type'], app['name'], app['desc'], app['url'], app['category'], app['button'])
        AppNAdSpacePage.createNewAdSpace(space['name'],space['desc'],space['adformat'],space['dimension'],space['category'],space['position'],space['sxDemand'],space['save'])
        //HomePage.verifyRecord(space['name'])
    })

    it('Add new direct order', () => {
        
        cy.clickHeaderMenuItem('Direct')
        var order = SanityTestData.TC002_OrderData
        
        CreateOrderPage.createNewOrder(order['name'], order['advertiser'], order['desc'], order['statusPaused'], order['button'])
        //HomePage.verifyRecord(order['name'])
    })

})