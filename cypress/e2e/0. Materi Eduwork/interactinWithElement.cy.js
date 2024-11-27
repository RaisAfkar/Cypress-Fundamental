/// <reference types="cypress" />

// // MATERI PEMBELAJARAN
// // describe('Browser action', () => {
// //     beforeEach('should load books website',() => {
// //         cy.visit('https://books.toscrape.com/', {timeout:10000});
// //     });

// //     it('should click on Travel Category', () => {
// //         cy.get('a').contains('Travel').click()
// //         cy.get('h1').should('have.text', 'Travel')
// //     });
    
//     // it('should click on Travel Category', () => {
//     //     cy.contains('Travel').click()
//     //     cy.url().should('include', 'catalogue/category/books/travel_2/index.html')
//     // });
// })

// TUGAS MATERI INTERACTING WITH ELEMENT
describe('Browser action', () => {
    beforeEach('should load zero bank website',() => {
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout:10000});
        cy.url().should('include', 'login.html')
    });
    it('should fill username', () => {
        cy.get('#user_login').type('ZeroBankLogin');
    });
    it('should fill password', () => {
        cy.get('#user_password').type('ZeroBankPassword');
    });
    it('should checked Sign In', () => {
        cy.get('#user_remember_me').click();
    });
})