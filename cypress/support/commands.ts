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
//
//
// -- This is a parent command --
Cypress.Commands.add('setBoardState', () => {
    cy.visit('/');
    cy.get('[data-test=start-game-button]').click();
    cy.get('[data-test=new-player-name]').type('Preston');
    cy.get('[data-test=new-player-button]').click();
    cy.get('[data-test=new-player-name]').type('Kayla');
    cy.get('[data-test=new-player-button]').click();
    cy.get('[data-test=new-player-name]').type('Logan');
    cy.get('[data-test=new-player-button]').click();
    cy.get('.candy-stripe').click();
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
    namespace Cypress {
        interface Chainable {
            setBoardState(): Chainable<void>
        }
    }
}