/// <reference types="cypress" />

var Chance = require('chance')
var chance = new Chance()

describe('Cadastro de Usuários', () => {
    it('Quando preencho todos campos, então devo ser cadastrado', () => {

        cy.visit('http://automationpractice.com')
        cy.get('a[title="Log in to your customer account"]').click()
        cy.get('h1[class="page-heading"]').should('have.text', 'Authentication')

        cy.get('#email_create').type(chance.email())
        cy.get('#SubmitCreate').click()
        cy.get('h1').should('have.text', 'Create an account')
        
        cy.get('input#id_gender2').check()
        cy.get('input#customer_firstname').type(chance.first())
        cy.get('input#customer_lastname').type(chance.last())
        
        cy.get('input#email').click()
        
        cy.get('input#passwd').type('Pwd123@')

        cy.get('select#days').select('10')
        cy.get('select#months').select('June')
        cy.get('select#years').select('2018')

        cy.get('input[name="newsletter"]').check()
        cy.get('input#optin').check()

        cy.get('#company').type(chance.company())
        cy.get('#address1').type(chance.address())
        cy.get('#address2').type('Terreo')
        cy.get('#city').type(chance.city())

        cy.get('#id_country').select('United States')
        cy.get('select#id_state').select(6)
        cy.get('#postcode').type(chance.zip())
        

        cy.get('textarea[name="other"]').type('Outras informações')

        cy.get('#phone').type(chance.phone())
        cy.get('#phone_mobile').type(chance.phone())

        cy.get('#alias').clear()
        cy.get('#alias').type(chance.address())

        cy.get('button#submitAccount').click()

        cy.get('.info-account').should('have.text', 'Welcome to your account. Here you can manage all of your personal information and orders.')

    });
});