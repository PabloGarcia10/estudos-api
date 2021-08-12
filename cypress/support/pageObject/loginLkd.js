///<reference types="cypress"/>

export class LoginLinkedin {
    constructor() {

    }

    openLkd = () => {
        cy.visit('https://www.linkedin.com/home')
    }

    login = (user, pass) => {
        cy.get('#session_key').type(user)
        cy.get('#session_password').type(pass)
        cy.get('.sign-in-form__submit-button').click()
    }
}