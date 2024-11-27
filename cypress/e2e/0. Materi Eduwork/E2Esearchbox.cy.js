/// <reference types="cypress" />

describe('field search box', () => {
    before(()=> {
        cy.visit('http://zero.webappsecurity.com/online-banking.html')
    })

    beforeEach(() => {
        cy.get('#searchTerm').type('test input {enter}')
        // cy.get('h2').should('contains.text', 'Search Results:')
    })
    it('should show search result page', () => {
        cy.get('h2').should('contain.text', 'Search Results:')
    });

})