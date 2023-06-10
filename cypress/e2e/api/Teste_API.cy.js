///<reference types="cypress"/>

import { ApiRest } from '../../support/requests/ApiRest.js'
import { FakeRestAPI } from '../../support/requests/endpoints/FakeRestAPI.js'

context('Teste de API', () => {

    const apiRest = new ApiRest();
    const fakeApi = new FakeRestAPI();

    it('Teste de request GET', () => {
        apiRest.executeGet(fakeApi.getBooks()).should((response) => {
            expect(response.status).to.eq(200)
            let bodyStr = JSON.stringify(response.body)
            expect(bodyStr).contains("Book 1")
        })
    })

    it('Teste de request POST', () => {

        /*Envio do BODY como JSON pode ser feito dessa maneira ou como no próximo exemplo
        Depende muito de cada caso e da sua necessidade teste */

        let body = {}
        body.id = 12345
        body.title = "TESTE DE API"
        body.description = "TESTE DE API"
        body.pageCount = 1
        body.excerpt = "string"
        body.publishDate = "2021-08-12T04:26:57.852Z"

        apiRest.executePost(fakeApi.postBooks(), body).should((response) => {
            expect(response.status).to.eq(200)
            let bodyStr = JSON.stringify(response.body)
            expect(bodyStr).to.eq(JSON.stringify(body))
        })
    });

    it('Teste de request POST com Fixtures', () => {
        cy.fixture('jsonBooks.json').then((booksJson) => {
            apiRest.executePost(fakeApi.postBooks(), booksJson).should((response) => {
                expect(response.status).to.eq(200)
                let bodyStr = JSON.stringify(response.body)
                expect(bodyStr).to.eq(JSON.stringify(booksJson))
            })
        })
    });

    it('Teste de request GET por ID', () => {
        apiRest.executeGet(fakeApi.getBooksById(2)).should((response) => {
            expect(response.status).to.eq(200)
            expect(JSON.stringify(response.body)).to.contains(`"id":2`)
        })
    });

    it('Teste de request PUT por ID', () => {
        let body = {}
        body.id = 9876
        body.title = "TESTE DE API"
        body.description = "TESTE DE API"
        body.pageCount = 1
        body.excerpt = "string"
        body.publishDate = "2021-08-12T04:26:57.852Z"

        apiRest.executePut(fakeApi.putBooksById(9876), body).should((response) => {
            expect(response.status).to.eq(200)
            expect(JSON.stringify(response.body)).to.contains(`"id":9876`)
        })
    });

    it('Teste de request DELETE por ID', () => {
        apiRest.executeDelete(fakeApi.getBooksById(2)).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.empty
        })
    });
})