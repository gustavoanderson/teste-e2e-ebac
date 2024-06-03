/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
    cy.visit('minha-conta')
    cy.logar('perfil.usuario', 'perfil.senha')
    cy.adicionarProduto()
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    cy.visit('carrinho')
    cy.get('.plus').click()
    cy.get('.plus').click()
    cy.get('.plus').click()
    cy.get('.checkout-button').click()
    cy.get('#payment_method_cod').click()
    cy.get('#billing_first_name').clear().type('Gustavo')
    cy.get('#billing_last_name').clear().type('Anderson')
    cy.get('#billing_company').clear().type('Testando Cypress Loja EBAC')
    cy.get('#terms')
    cy.get('#terms').click()
    cy.get('#place_order').click()
    cy.get('.woocommerce-notice').should('contain' , 'Obrigado. Seu pedido foi recebido.')  
  });
})