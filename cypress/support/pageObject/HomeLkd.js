///<reference types="cypress"/>

export class HomeLinkedin {
    constructor() {

    }
    pesquisarVaga = (vaga) => {
        cy.get('.search-global-typeahead').type(vaga)
    }

    logout = () => {
        cy.wait(2000)
        cy.get('#ember31 > .global-nav__primary-link-text').click()
        cy.get('.global-nav__secondary-item--divider > .global-nav__secondary-link').click()
        cy.get('#ember31 > .global-nav__primary-link-text').should('be.visible')
        cy.contains('Sair').should('be.visible').click()
    }
}