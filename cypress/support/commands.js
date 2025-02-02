Cypress.Commands.add('getByDataTest', (selector) => {
    return cy.get(`[data-test="${selector}"]`)
})

Cypress.Commands.add('checkText', (element, text) => {
    cy.get(element).should('have.text', text)
})

Cypress.Commands.add('loginUI', (email, password) => {
   cy.session([email, password], () => {
     cy.visit('/')
     cy.getByDataTest('botao-login').click()
     cy.getByDataTest('email-input').clear().type(email)
     cy.getByDataTest('senha-input').clear().type(password)
     cy.getByDataTest('botao-enviar').click()
    })
})

Cypress.Commands.add('loginAPI', (email, password) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/users/login',
        body: {
            email: email,
            senha: password
        }
    })
 })