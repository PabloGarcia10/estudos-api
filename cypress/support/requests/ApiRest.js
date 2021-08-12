/// <reference types="cypress"/> 

export class ApiRest {

    constructor() {
        this.param = new Map()
        this.header = new Map()
        this.addHeader("accept", "application/json")
        this.addHeader("content-type", "application/json")
    }

    addParams = (param, value) => {
        this.param.set(param, value)
    }

    addHeader = (header, value) => {
        this.header.set(header, value)
    }

    executeGet = (url) => {
        const paramObj = Object.fromEntries(this.param)
        const headersObj = Object.fromEntries(this.header)

        cy.log('=============== GET =================')
        cy.log(`URL: ${url}`)
        cy.log(paramObj)

        return cy.request({
            method: 'GET',
            url: url,
            qs: paramObj,
            headers: headersObj,
            "failOnStatusCode": false
        })
    }

    executePost = (url, body) => {
        const paramObj = Object.fromEntries(this.param)
        const headersObj = Object.fromEntries(this.header)

        cy.log('=============== POST =================')
        cy.log(`URL: ${url}`)
        cy.log(JSON.stringify(body))

        return cy.request({
            method: 'POST',
            url: url,
            qs: paramObj,
            headers: headersObj,
            body: body,
            failOnStatusCode: false
        })
    }

    executePatch = (url, body) => {
        const paramObj = Object.fromEntries(this.param)
        const headersObj = Object.fromEntries(this.header)

        cy.log('=============== PATCH =================')
        cy.log(`URL: ${url}`)
        cy.log(JSON.stringify(body))

        return cy.request({
            method: 'PATCH',
            url: url,
            qs: paramObj,
            headers: headersObj,
            body: body,
            failOnStatusCode: false
        })
    }

    executePut = (url, body) => {
        const paramObj = Object.fromEntries(this.param)
        const headersObj = Object.fromEntries(this.header)

        cy.log('=============== PUT =================')
        cy.log(`URL: ${url}`)
        cy.log(JSON.stringify(body))

        return cy.request({
            method: 'PUT',
            url: url,
            qs: paramObj,
            headers: headersObj,
            body: body,
            failOnStatusCode: false
        })
    }

    executeDelete = (url, body) => {
        const paramObj = Object.fromEntries(this.param)
        const headersObj = Object.fromEntries(this.header)

        cy.log('=============== DELETE =================')
        cy.log(`URL: ${url}`)
        cy.log(JSON.stringify(body))

        return cy.request({
            method: 'DELETE',
            url: url,
            qs: paramObj,
            headers: headersObj,
            body: body,
            failOnStatusCode: false
        })
    }

    logResponse = (status, body) => {
        cy.log('--------------------------------')
        cy.log(`RESPONSE`)
        cy.log(`Status Code: ${status}`)
        let responseBody = JSON.stringify(body)
        const bodyAux = new Cypress.Promise((resolve, reject) => resolve(responseBody))
        bodyAux.then(($res) => cy.log(`Body: ${$res}`))
    }
}