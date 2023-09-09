describe('Logging on the app', () => {

  context('Given that I open the login form', () => {

    beforeEach(() => {
      cy.visit('/')
      cy.getByDataTest('botao-login').click()
    })

    context('When I submit valid credentials', () => {

      it('Then I successfuly access the homepage', () => {

        cy.getByDataTest('email-input').clear().type('automated@test.com')
        cy.getByDataTest('senha-input').clear().type('password123')
        cy.getByDataTest('botao-enviar').click()

        cy.checkText('.Cabecalho_usuario__info__JSxid > p', 'Olá, Automated Tester')
        cy.location('pathname').should('eq', '/home')

      })

    })

    context('When I submit invalid credentials', () => {
      
      it('Then I see an error message', () => {
        cy.getByDataTest('email-input').clear().type('automated@test.com')
        cy.getByDataTest('senha-input').clear().type('wrong password')
        cy.getByDataTest('botao-enviar').click()

        cy.checkText('span', 'E-mail ou senha incorretos')
        cy.location('pathname').should('eq', '/')

      })

    })

    context('When I submit an empty email', () => {
      
      it('Then a  message informs that the email is required', () => {
        cy.getByDataTest('email-input').clear()
        cy.getByDataTest('senha-input').clear().type('password123')
        cy.getByDataTest('botao-enviar').click()

        cy.checkText('[data-test="mensagem-erro"]', 'O campo email é obrigatório')
        cy.location('pathname').should('eq', '/')

      })

    })

    context('When I submit an empty password ', () => {
      
      it('Then I see an error message', () => {
        cy.getByDataTest('email-input').clear().type('automated@test.com')
        cy.getByDataTest('senha-input').clear()
        cy.getByDataTest('botao-enviar').click()

        cy.checkText('[data-test="mensagem-erro"]', 'O campo de senha é obrigatório')
        cy.location('pathname').should('eq', '/')

      })

    })

  })
    
})