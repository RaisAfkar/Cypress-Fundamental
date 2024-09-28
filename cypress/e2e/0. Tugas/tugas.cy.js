/// <reference types="cypress" />

describe('My First Test', () => {
    it('Clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io/')
        cy.pause()
        cy.contains('type').click()
        cy.url().should('include','/commands/actions')
        cy.get('.action-email').type('fake@email.com')
        cy.get('.action-email').should('have.value','fake@email.com')
    });
});