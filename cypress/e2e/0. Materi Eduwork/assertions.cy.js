/// <reference types="cypress" />

// MATERI PEMBELAJARAN
describe('Browser action', () => {
    beforeEach(() => {
        cy.visit('https://reqres.in/', {timeout:10000});
    });

    it('should check correct url', () => {
        cy.url().should('include', 'reqres.in')
    });
    it('should check for correct element on the page', () => {
        cy.get('h2').should('be.visible')
    });
})