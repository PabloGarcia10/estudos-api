///<reference types="cypress"/>

export class HomeLinkedin {
    constructor() {

    }
    pesquisarVaga = (vaga) => {
        cy.get('.search-global-typeahead').type(vaga)
    }

    logout = () => {
        cy.wait(2000)
        cy.get('#ember31').click()
        cy.get('.global-nav__secondary-item--divider > .global-nav__secondary-link').click()
        cy.contains('Sair').click({ force: true })
    }
}