/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

Cypress.Commands.add('logar', (usuario , senha) => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('adicionarProduto', () => {
    cy.visit('produtos')
    cy.get('.post-3111 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Brown').click()
    cy.get('.single_add_to_cart_button').click()
});
