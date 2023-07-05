/// <reference types="Cypress" />

describe('Yahoo search', () => {
  beforeEach(() => {
    cy.visit('https://espanol.yahoo.com')
  })
  
  it('Search something', () => {
    cy.get('#ybar-sbq').type('Marvel movies')
    cy.get('#ybar-search').click()
  })
  // it('', ()=>{

  // })

})