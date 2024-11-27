/// <reference types="cypress" />

describe('browser action', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout:10000});
        cy.url().should('include', 'login.html')
    });
    it('should succes login', () => {
        cy.fixture('data').then(data => {
            const username = "username";
            const password = "password";
        cy.login(username, password)
        // cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.');
        })
     })
     it('should succes pay biils', () => {
        cy.visit('http://zero.webappsecurity.com/online-banking.html')
        cy.url().should('include', 'online-banking.html');
        cy.get('#online_statements_link').click();
        cy.get('h2').contains('Statements & Documents');
        cy.get('#pay_bills_tab').click();
        cy.get('h2').contains('Make payments to your saved payees');
        cy.fixture('data').then(data => {
            const amount = 12;
            const date = "2024-10-01";
            const description = "bayar";
            cy.payBills(amount, date, description)
        })
     });
});