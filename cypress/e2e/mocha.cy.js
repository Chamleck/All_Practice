/// <reference types="cypress"/>


// before(() => {

// })

beforeEach(() => {
    cy.visit('https://google.com/');
})

// after(() => {
//     cy.log('This is log from after method')
// })

// afterEach(() => {
//     cy.log('This is log from afterEach method')
// })

describe('Test suit for google', () => {
    describe('Positive scenarios', {retries: 2}, () => {

        it("Пошук в гугл 1", () => {
            cy.get('input.gLFyf.gsfi').clear().type('Cypress');
        })
        
        it("Пошук в гугл 2", () => {
            cy.get('input.gLFyf.gsfi').clear().type('Cypress');
        })
        
        it("Пошук в гугл 3", () => {
            cy.get('input.gLFyf.gsfi1').clear().type('Cypress');
        })
        
        it("Пошук в гугл 4", () => {
            cy.get('input.gLFyf.gsfi1').clear().type('Cypress');
        })
    })
    
    describe('Negative scenarios', () => {
        it("Пошук в гугл 1", () => {
            cy.get('input.gLFyf.gsfi').clear().type('Cypress');
        })
        
        it("Пошук в гугл 2", () => {
            cy.get('input.gLFyf.gsfi').clear().type('Cypress');
        })
        
        it.skip("Пошук в гугл 3", () => {
            cy.get('input.gLFyf.gsfi').clear().type('Cypress');
        })
        
        it("Пошук в гугл 4", () => {
            cy.get('input.gLFyf.gsfi').clear().type('Cypress');
        })
    })
})