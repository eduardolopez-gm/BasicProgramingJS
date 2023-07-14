describe('CRUD operations', () => {
  it('GET API testing ', {tags: '@smoke'}, () => {
    cy.request('GET', 'https://reqres.in/api/users?page=2').should((response) => {
      expect(response.status).to.eq(200)
    })
  })
  it('POST API testing ',{tags: '@smoke'}, () => {
    cy.request('POST', 'https://reqres.in/api/users', {
      name: 'Eduardo Lopez',
      job: 'QA Automation Tester'
    }).should((response) => {
      expect(response.status).to.eq(201)
    })
  })
  it('PUT API testing ',{tags: '@smoke'}, () => {
    cy.request('PUT', 'https://reqres.in/api/users/2', {
      name: 'Vanesa ',
      job: 'Graphic Designer'
    }).should((response) => {
      expect(response.status).to.eq(200)
    })
  })
  it('DELETE API testing ',{tags: '@smoke'}, () => {
    cy.request('DELETE', 'https://reqres.in/api/users/2').should((response) => {
      expect(response.status).to.eq(204)
    })
  })
})