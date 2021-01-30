describe('Homepage', () => {
    it('Visits the Homepage', () => {
        cy.visit('localhost:8080')
        cy.contains('Homepage').should('be.visible')          
    })
})