/// <reference types="cypress" />

describe('example saucedemo.com', () => {
    it('Login until checkout product', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include', 'inventory.html')
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.get('.shopping_cart_link').should('be.empty')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_link').click()
        cy.url().should('include', 'cart.html')
        cy.get('#checkout').click()
        cy.url().should('include', 'checkout-step-one.html')
        cy.get('#first-name').type('Rais')
        cy.get('#last-name').type('Afkar')
        cy.get('#postal-code').type('12345')
        cy.get('#continue').click()
        cy.url().should('include', 'checkout-step-two.html')
        cy.get('#finish').click()
        cy.url().should('include', 'checkout-complete.html')
        cy.get('#back-to-products').click()
     })
});