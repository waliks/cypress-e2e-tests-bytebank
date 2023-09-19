describe('Investiments Page', () => {
    context('Given that I\'m logged in', () => {

        beforeEach(() => {
            cy.loginAPI('automated@test.com', '123')
            cy.visit('/home')
        })

        context('When I access the investments page', () => {

            it('Then I see my investiments total amount and its statistics', () => {

                cy.get('[href="/home/investimentos"]').click()

                cy.get('.Investimentos_investimentos__0ygFc > p').should('have.text', 'Total: R$ 1.000.000,00')
                cy.get('.Investimentos_grafico__QBHUo').should('be.visible')
            })
        })
    })
})