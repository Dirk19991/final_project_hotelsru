describe('Home page testing', () => {
    // it('visits movies page using links', () => {
    //     cy.visit('/')
    //     cy.get('a[href*="/movies"]').click({ multiple: true })
    //     cy.url().should('include', '/movies')
    // })

    it('auth modal works', () => {
        cy.visit('/')

        cy.get('[data-testid="profile-button"]').trigger('mouseover')

        cy.contains('Войти').click()
        cy.get('[data-testid="auth-modal"]').should('exist')

        cy.get('input[data-testid="email-input"]').should('be.enabled')
        cy.get('input[data-testid="email-input"]').should('be.enabled')

        cy.get('[data-testid="close-modal"]').click()
        cy.get('[data-testid="auth-modal"]').should('not.exist')
    })
})
