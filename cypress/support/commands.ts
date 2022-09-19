/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import SignInPage from '../e2e/pages/signIn.page'
import Header from '../e2e/pages/components/header.component'


Cypress.Commands.overwrite<'type', 'element'>('type', (originalFn, element, text, options) => {
    if(text!== '') {
        return originalFn(element, text, options)
    }
})

Cypress.Commands.overwrite<'select', 'element'>('select', (originalFn, element, str, options) => {
  if(str!== '') {
      return originalFn(element, str, options)
  }
})

Cypress.Commands.add('signIn', (_email, _password) => {
    SignInPage.signInApp(_email, _password)
})

Cypress.Commands.add('logout', () => {
    Header.logout()    
})

Cypress.Commands.add('clickHeaderMenuItem', (menuItem) => {
  Header.clickHeaderMenuItem(menuItem);
})

Cypress.Commands.add('clickUserMenuItem', (userItem) => {
  Header.clickUserMenuItem(userItem);
})


declare global {
  namespace Cypress {
    interface Chainable {
      signIn(email: string, password: string): Chainable<void>
      logout(): Chainable<void>
      clickHeaderMenuItem(menuItem: string): Chainable<void>
      clickUserMenuItem(userItem: string): Chainable<void>
      addLeadingZeroes(n: number): Chainable<number>
    }
  }
}