/// <reference types="Cypress" />

describe('The internet DEMO PAGE', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/')
      })
    const user = {name : 'randomName', pass : 'randomPASS'}

    it('Validate elements in page', () => {
        cy.get('.heading').should('have.text', 'Welcome to the-internet')
        cy.url().should('include', '/the-internet')
        cy.get('h2').should('have.text', 'Available Examples' )
        cy.get('.large-4 > div').should('have.text', 'Powered by Elemental Selenium')
    })
    it('Handling test in new tab into same tab', () =>{
        cy.get('.large-4 > div > a').invoke('attr', 'href').
        then(target => {
        cy.log(target)
        cy.visit(target)})
        
     })
     it('Verify Add/Remove buttons', ()=>{
        cy.get('ul > :nth-child(2) > a').click()
        cy.url().should('include', '/add_remove_elements')
        cy.get('h3').should('have.text', 'Add/Remove Elements')
        for(let i=0; i< 5 ; i++){
            cy.get('[onclick="addElement()"]').click()
            cy.get('#elements > :nth-child('+ (i+1) +')').should('have.class', 'added-manually')
        }
        for(let i=0; i< 5 ; i++){
            cy.get('#elements > :nth-child(1)').click()
        }
        cy.get('.large-4 > div').should('have.text', 'Powered by Elemental Selenium')
     })
     it('Verify Checkboxes behaviour ', ()=>{
        cy.get(':nth-child(6) > a').click()
        cy.get('h3').should('have.text', 'Checkboxes')
        cy.get('#checkboxes > :nth-child(1)').check().should('have.attr', 'checked')
        cy.get('#checkboxes > :nth-child(3)').should('have.attr', 'checked')
        cy.get('#checkboxes > :nth-child(3)').uncheck()
        cy.get('#checkboxes > :nth-child(1)').uncheck()
        cy.get('.large-4 > div').should('have.text', 'Powered by Elemental Selenium')
     })
     it('Verify Forgot password page ', ()=>{
        cy.get(':nth-child(20) > a').click()
        cy.get('h2').should('have.text', 'Forgot Password')
        cy.get('label').should('have.text', 'E-mail')
        cy.get('#email').type('testinguser@yopmail.com')
        cy.get('#email').should('have.value', 'testinguser@yopmail.com')
        cy.get('#form_submit').click()
        cy.get('h1').should('have.text', 'Internal Server Error')
       
        

     })
     it('Verify success login', ()=>{
        cy.get(':nth-child(21) > a').click()
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa').click()

        cy.get('#flash').should('be.visible')
        cy.get('h2').should('have.text', ' Secure Area')
        cy.get('.subheader')
        cy.get('.button').should('have.text', ' Logout').click()

        cy.url().should('include', '/login')
     })
     

     it('Verify login with invalid credentials', ()=>{
        cy.get(':nth-child(21) > a').click()
        cy.get('#username').type(user.name)
        cy.get('#password').type(user.pass)
        cy.get('.fa').click()

        cy.get('#flash').should('be.visible').and('have.text', '\n            Your username is invalid!\n            ×\n          ')
        
        
    })
    
  })
