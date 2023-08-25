/// <reference types="Cypress" />

describe('Check A11y rules in different sites', () => {
    it.only('Check in Google page', ()=>{
        cy.visit('https://www.google.com/')
        cy.injectAxe()
        cy.checkA11y()
    })
    it('Check in Globant page', ()=>{
        cy.visit('https://www.globant.com/')
        cy.injectAxe()
        cy.checkA11y()
    })
    it('Check in Youtube page', ()=>{
        cy.visit('https://www.youtube.com/')
        cy.injectAxe()
        cy.checkA11y()
    })
    it('Check in Wikipedia page', ()=>{
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
        cy.injectAxe()
        cy.checkA11y()
    })
    it('Check in Celeri home page', ()=>{
        cy.visit('https://www.celeri.app/')
        cy.injectAxe()
        cy.checkA11y()
    })
    it.only('Check in Celeri agendar demo page', ()=>{
        cy.visit('https://www.celeri.app/agendar-demo')
        cy.injectAxe()
        cy.checkA11y()
    })
    it.only('Check in articulo random', ()=>{
        cy.visit('https://www.celeri.app/blog/desafios-de-ciso-ante-los-ciberdelitos')
        cy.injectAxe()
        cy.checkA11y()
    })
     


    it.skip('Check in Imagine Learning page', ()=>{
        cy.visit('https://www.imaginelearning.com/')
        cy.injectAxe()
        cy.checkA11y()
    })
    it.skip('Check in Imagine Learning contact us page', ()=>{
        cy.visit('https://www.imaginelearning.com/about/contact-us/')
        cy.injectAxe()
        cy.checkA11y()
    })

    



})