/// <reference types="cypress" />

describe('browser action', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
    })
    it('click online banking menu', () => {
        cy.get('#onlineBankingMenu').click()
        cy.get('h1').should('contain.text', 'Online Banking')
    });
    it('click feedback menu', () => {
        cy.get('#feedback').click()
        cy.get('#feedback-title').should('contain.text', 'Feedback')
    });
    it('click zero bank menu', () => {
        cy.get('.brand').click()
        cy.get('h4').should('contain.text', 'Online Banking')
    });
})