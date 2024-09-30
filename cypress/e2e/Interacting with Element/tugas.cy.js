/// <reference types="cypress" />

describe('Browser action', () => {
    it('should sign in saucedemo.com', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
        cy.get('#user_login').type('fake@email.com')
        cy.get('#user_password').type('failedlogin')
        cy.get('#user_remember_me').check()
        cy.get('.btn-primary').click()
    });
})