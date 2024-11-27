/// <reference types="cypress" />

// describe('browser action', () => {
//     it('should fill username & password', () => {
//         cy.visit('http://zero.webappsecurity.com/login.html', {timeout:10000});
//         cy.url().should('include', 'login.html')
//         cy.fixture('data').then(data => {
//             const username = "ZeroBankUsername";
//             const password = "ZeroBankPassword";
//             cy.get('#user_login').type(username);
//             cy.get('#user_password').type(password);
//         cy.get('#user_remember_me').click();
//         cy.get('.btn-primary').click();
//         cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.');
//         })
//      })
// });

describe('example saucedemo.com', () => {
    it('Login until checkout product', () => {
        cy.visit('https://www.saucedemo.com')
        cy.fixture('data').then(data => {
            const usersaucedemo = "standard_user"
            const passwordsaucedemo = "secret_sauce"
            const firstname = "Rais"
            const lastname = "afkar"
            const postalcode = 12345
        cy.get('#user-name').type(usersaucedemo)
        cy.get('#password').type(passwordsaucedemo)
        cy.get('#login-button').click()
        cy.url().should('include', 'inventory.html')
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.get('.shopping_cart_link').should('be.empty')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_link').click()
        cy.url().should('include', 'cart.html')
        cy.get('#checkout').click()
        cy.url().should('include', 'checkout-step-one.html')
        cy.get('#first-name').type(firstname)
        cy.get('#last-name').type(lastname)
        cy.get('#postal-code').type(postalcode)
        cy.get('#continue').click()
        cy.url().should('include', 'checkout-step-two.html')
        cy.get('#finish').click()
        cy.url().should('include', 'checkout-complete.html')
        cy.get('#back-to-products').click()
        })
     })
});