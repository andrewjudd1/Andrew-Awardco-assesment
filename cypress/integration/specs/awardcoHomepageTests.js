describe('Verify Awardco Home Page', () => {

    it('Verify Awardco logo is visible', () => {

        cy.visit('https://www.award.co/');

        cy.get('.logo').should('be.visible');

    })

    it('Verify Header is present', () => {

        cy.get('h1').first().should('be.exist');

    })

    it('Verify Navigation is present', () => {

        cy.viewport(1000, 630)

        cy.get('[role=navigation]').should('be.visible');
        cy.get('#w-dropdown-toggle-0').first().should('be.visible')
        cy.get('#w-dropdown-toggle-1').first().should('be.visible')
        cy.get('#w-dropdown-toggle-2').first().should('be.visible')

        cy.viewport(900, 630)
        cy.get('[role=navigation]').should('not.be.visible');


    })

    it('Verify if Awardco has any friends', () => {

        cy.get(".w-layout-grid.grid.tiles.clients").should('be.exist');
        cy.get("#w-node-_7683a287-1151-b1b3-f966-f002ded2d337-ea5e68b0").should('be.exist')
    })

})