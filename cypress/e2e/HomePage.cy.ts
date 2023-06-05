describe('Home page testing', () => {
    it('visits movies page using links', () => {
        cy.visit('/')
        cy.get('a[href*="/movies"]').click({ multiple: true })
        cy.url().should('include', '/movies');
    })
})
