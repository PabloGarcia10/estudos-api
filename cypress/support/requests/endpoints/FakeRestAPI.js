/// <reference types = "cypress"/>

// Swagger: https://fakerestapi.azurewebsites.net/index.html

// ================================= BOOKS ==============================

export class FakeRestAPI {
    constructor() {
        this.url = 'https://fakerestapi.azurewebsites.net'
    }

    getBooks = () => this.url + '/api/v1/Books'

    postBooks = () => this.url + '/api/v1/Books'

    getBooksById = (id) => this.url + `/api/v1/Books/${id}`

    putBooksById = (id) => this.url + `/api/v1/Books/${id}`

    deleteBooksById = (id) => this.url + `/api/v1/Books/${id}`
}