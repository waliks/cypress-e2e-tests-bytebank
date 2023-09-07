describe('Create an account', () => {

  context('Given that I access the account creation form', () => {

    beforeEach(() => {
      cy.visit('/')
      cy.getByDataTest('botao-cadastro').click()
    })

    context('When I fill out the form correctly', () => {

      it('Then an account is succesfully created', () => {

        cy.getByDataTest('nome-input').clear().type('automated tester')
        cy.getByDataTest('email-input').clear().type('automated@teste.co')
        cy.getByDataTest('senha-input').clear().type('tester123')

        cy.intercept('**/register').as('registerAccount')
        cy.getByDataTest('botao-enviar').click()

        cy.wait('@registerAccount').then((call) => {
          expect(call.response.statusCode).to.equal(201)
        })
        
      })
    })
  })
  
})