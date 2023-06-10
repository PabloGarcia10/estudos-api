/// <reference types="cypress"/>

import { LoginLinkedin } from '../../support/pageObject/loginLkd.js'
import { HomeLinkedin } from '../../support/pageObject/HomeLkd.js'

context('Testes  automatizados WEB', () => {

    const login = new LoginLinkedin();
    const home = new HomeLinkedin();

    beforeEach(() => {
        login.openLkd()
        login.login('Seu usuário', 'Sua senha')
    })

    afterEach(() => {
        home.logout()
    })

    it('Validar pesquisa de vaga - Linkedin', () => {
        home.pesquisarVaga("Automação{enter}")
    });
})