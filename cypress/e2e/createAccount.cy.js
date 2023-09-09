import { faker } from '@faker-js/faker';

describe('Create an account', () => {

  context('Given that I access the account creation form', () => {

    beforeEach(() => {
      cy.visit('/')
      cy.getByDataTest('botao-cadastro').click()
    })

    context('When I fill out the form correctly', () => {

      it('Then an account is succesfully created', () => {

        cy.getByDataTest('nome-input').clear().type(faker.person.fullName())
        cy.getByDataTest('email-input').clear().type(faker.internet.email())
        cy.getByDataTest('senha-input').clear().type(faker.internet.password())

        cy.intercept('**/register').as('registerAccount')
        cy.getByDataTest('botao-enviar').click()
        cy.checkText('span', 'Usuário cadastrado com sucesso!')

        cy.wait('@registerAccount').then((call) => {
          expect(call.response.statusCode).to.equal(201)
        })
        
      })
    })

    context('When I submit an empty name', () => {

      it('Then a message informs that the name is a mandatory field', () => {

        cy.getByDataTest('nome-input').clear()
        cy.getByDataTest('email-input').clear().type(faker.internet.email())
        cy.getByDataTest('senha-input').clear().type(faker.internet.password())

        cy.getByDataTest('botao-enviar').click()
        cy.checkText('[data-test="mensagem-erro"]', 'O campo de nome é obrigatório')         
      })
    })

    context('When I submit an empty email', () => {

      it('Then a message informs that the email is a mandatory field', () => {

        cy.getByDataTest('nome-input').clear().type(faker.person.fullName())
        cy.getByDataTest('email-input').clear()
        cy.getByDataTest('senha-input').clear().type(faker.internet.password())

        cy.getByDataTest('botao-enviar').click()
        cy.checkText('[data-test="mensagem-erro"]', 'O campo de email é obrigatório')         
      })
    })

    context('When I submit an empty password', () => {

      it('Then a message informs that the password is a mandatory field', () => {

        cy.getByDataTest('nome-input').clear().type(faker.person.fullName())
        cy.getByDataTest('email-input').clear().type(faker.internet.email())
        cy.getByDataTest('senha-input').clear()

        cy.getByDataTest('botao-enviar').click()
        cy.checkText('[data-test="mensagem-erro"]', 'O campo de senha é obrigatório')         
      })
    })

  })
  
})