/// <reference types="cypress"/>


const testWithParams = ({arg, expected}) =>
function(){
    cy.visit('https://google.com/');
    cy.get('input.gLFyf.gsfi').clear().type(arg[0]);
    cy.get('input.gLFyf.gsfi').should('contain.value', expected[0]);
    cy.get('input.gLFyf.gsfi').clear().type(arg[1]);
    cy.get('input.gLFyf.gsfi').should('contain.value', expected[1]);
    cy.get('input.gLFyf.gsfi').clear().type(arg[2]);
    cy.get('input.gLFyf.gsfi').should('contain.value', expected[2]);
}

it('first', testWithParams({arg: ['1', '2', '3'], expected: ['1' , '2', '3']}));
it('second', testWithParams({arg: '2', expected: '2'}));
it('third', testWithParams({arg: '3', expected: '3'}));

// другий варіант

const params = [
    {arg: ['1', '2', '3'], expected: ['1' , '2', '3']},
    {arg: ['qwe', 'asd', 'onj'], expected: ['qwe', 'asd', 'onj']},
    {arg: ['asdfasdf76', '2asdfasdf12', 'asdfas33'], expected: ['asdfasdf76', '2asdfasdf12', 'asdfas33']}
]

params.forEach(({arg, expected}) => {
    it(`Type ${arg} in search field`, () => {
        cy.visit('https://google.com/');
        cy.get('input.gLFyf.gsfi').clear().type(arg[0]);
        cy.get('input.gLFyf.gsfi').should('contain.value', expected[0]);
        cy.get('input.gLFyf.gsfi').clear().type(arg[1]);
        cy.get('input.gLFyf.gsfi').should('contain.value', expected[1]);
        cy.get('input.gLFyf.gsfi').clear().type(arg[2]);
        cy.get('input.gLFyf.gsfi').should('contain.value', expected[2]);
    })
})