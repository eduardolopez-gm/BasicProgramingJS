/// <reference types="Cypress" />

describe('Predecir edad API', ()=>{
    const endpoint = 'https://api.agify.io'
    const parametro = 'name'
    const requestName = 'emma'

    it('Validate response data ', ()=>{
        cy.request(`${endpoint}?${parametro}=${requestName}`).then( respuesta =>{
            cy.log(JSON.stringify(respuesta.body))
            const {count, name, age} = respuesta.body
            cy.log(count, name, age)
            
            expect(respuesta.status).to.eq(200)
            expect(count).to.be.a('number').and.not.to.be.null
            expect(age).to.be.a('number').and.not.to.be.null
            expect(name).to.eq(requestName)

        })

    })
    it('validate negative scenario', ()=>{
        const parametro = 'age'
        const requestAge = 22
        cy.request({
            method: 'GET',
            url: `${endpoint}?${parametro}=${requestAge}`,
            failOnStatusCode: false})
            .then( respuesta =>{
            expect(respuesta.status).to.eq(422)
        })


    })


})