describe('When I access the ByteBank landing page', () => {

  before( () => {
    cy.visit('')
  })

  it('Then the landing page texts are correct', () => {

    const mainTitle = "Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!"
    
    const befenefitTitle1 = "Conta e cartão gratuitos"
    const befenefitTitle2 = "Saques sem custo"
    const befenefitTitle3 = "Programa de pontos"
    const befenefitTitle4 = "Seguro Dispositivos"

    const befenefitText1 = "Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção."
    const befenefitText2 = "Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h."
    const befenefitText3 = "Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!"
    const befenefitText4 = "Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica."

    cy.getByDataTest('titulo-principal').should('have.text', mainTitle)

    cy.get('.Inicio_vantagens__item__98WsT > h3').eq(0).should('have.text', befenefitTitle1)
    cy.get('.Inicio_vantagens__item__98WsT > p').eq(0).should('have.text', befenefitText1)

    cy.get('.Inicio_vantagens__item__98WsT > h3').eq(1).should('have.text', befenefitTitle2)
    cy.get('.Inicio_vantagens__item__98WsT > p').eq(1).should('have.text', befenefitText2)

    cy.get('.Inicio_vantagens__item__98WsT > h3').eq(2).should('have.text', befenefitTitle3)
    cy.get('.Inicio_vantagens__item__98WsT > p').eq(2).should('have.text', befenefitText3)

    cy.get('.Inicio_vantagens__item__98WsT > h3').eq(3).should('have.text', befenefitTitle4)
    cy.get('.Inicio_vantagens__item__98WsT > p').eq(3).should('have.text', befenefitText4)

  })

})