/// <reference types="cypress" />

// MATERI PEMBELAJARAN
// describe("My First Test", () => {
//     it("Visit the Kitchen Sink", () => {
//         cy.visit("https://example.cypress.io");
//         cy.get('h1').contains("Kitchen Sink");
//         cy.contains('get').click();
//         cy.url().should('include', 'commands/querying');
//         cy.get('h1').contains('Querying');
//     })
// })

// TUGAS MATERI Test Script
describe("My First Test", () => {
    it("Visit the Kitchen Sink", () => {
        cy.visit("https://example.cypress.io");
        cy.get('h1').contains('Kitchen Sink');
        cy.contains('type').click();
        cy.url().should('include', 'commands/actions')
        cy.get('#email1').type('fake@email.com');
        cy.get('#email1').should('have.value', 'fake@email.com');
    })
})