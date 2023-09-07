describe('Logging on the app', () => {

  context('Given that I open the login form', () => {

    beforeEach(() => {
      cy.visit('/')
      cy.getByDataTest('botao-login').click()
    })

    context('When I submit valid credentials', () => {

      it('Then I successfuly access the homepage', () => {
        cy.getByDataTest('email-input').clear().type('automated@teste.co')
        cy.getByDataTest('senha-input').clear().type('tester123')
        cy.getByDataTest('botao-enviar').click()

        cy.checkText('.Cabecalho_usuario__info__JSxid > p', 'Olá, automated tester')
        cy.location('pathname').should('eq', '/home')

      })

    })

    context('When I submit invalid credentials', () => {
      
      it('Then I see an error message', () => {
        cy.getByDataTest('email-input').clear().type('automated@teste.co')
        cy.getByDataTest('senha-input').clear().type('wrong password')
        cy.getByDataTest('botao-enviar').click()

        cy.checkText('span', 'E-mail ou senha incorretos')
        cy.location('pathname').should('eq', '/')

      })

    })

  })
    
})