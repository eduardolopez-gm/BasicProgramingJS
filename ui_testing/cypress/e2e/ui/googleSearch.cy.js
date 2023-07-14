/// <reference types="Cypress" />

describe('google search', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com/')
      })
    
      it('Make a search in google', ()=>{

        cy.intercept('GET', '**/complete/search?*').as('searchRequest')
        cy.get('#APjFqb').type('fast food {enter}')

        cy.wait('@searchRequest')
        cy.get('#search').within(()=>{
            cy.get('[jscontroller="SC7lYd"]').first().click()
        })
        cy.url()//.should('have', '/en.wikipedia.org/wiki/Fast_food')

      })



})