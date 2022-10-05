/// <reference types="cypress"/>





const params = [
    {login: ['1', '2', '3'], expected_l: ['1' , '2', '3'], 
    password: ['1234qwert', 'qwert1234', 'qwertyytrewq'], expected_p: ['1234qwert', 'qwert1234', 'qwertyytrewq']},
    {login: ['qwe', 'asd', 'onj'], expected_l: ['qwe', 'asd', 'onj'], 
    password: ['123456778', '908789301', '31209372104'], expected_p: ['123456778', '908789301', '31209372104']},
    {login: ['asdfasdf76', '2asdfasdf12', 'asdfas33'], expected_l: ['asdfasdf76', '2asdfasdf12', 'asdfas33'], 
    password: ['*^!@^$($@)(*', 'DKASFHASFLHSA', '@%!@$*521485'], expected_p: ['*^!@^$($@)(*', 'DKASFHASFLHSA', '@%!@$*521485']}
    
]




    params.forEach(({login, password, expected_l, expected_p}) => {
        it(`Type ${login} in login field and ${password} to password field`, () => {
            cy.visit ('https://sanitarskyi-ngx-admin.herokuapp.com');
            cy.get('[alt="Material Dark Theme"]').click();
            cy.get('[title="Forms"]').click();
            cy.get('[title="Form Layouts"]').click();
            cy.get('#exampleInputEmail1').clear().type(login[0]);
            cy.get('#exampleInputEmail1').should('contain.value', expected_l[0]);
            cy.get('#exampleInputPassword1').clear().type(password[0]);
            cy.get('#exampleInputPassword1').should('contain.value', expected_p[0]);
            cy.get('#exampleInputEmail1').clear().type(login[1]);
            cy.get('#exampleInputEmail1').should('contain.value', expected_l[1]);
            cy.get('#exampleInputPassword1').clear().type(password[1]);
            cy.get('#exampleInputPassword1').should('contain.value', expected_p[1]);
            cy.get('#exampleInputEmail1').clear().type(login[2]);
            cy.get('#exampleInputEmail1').should('contain.value', expected_l[2]);
            cy.get('#exampleInputPassword1').clear().type(password[2]);
            cy.get('#exampleInputPassword1').should('contain.value', expected_p[2]);
        })
    })

