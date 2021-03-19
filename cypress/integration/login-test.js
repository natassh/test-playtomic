
/// <reference types="cypress" />

context('Login test', () => {

    it('Can open the app', () => {
       
        cy.visit('http://localhost:3000/');

    })

    it('Can enter an email', () => {

        const inputEmail = cy.get('.LoginForm input[type=text]');

        inputEmail.type('natachaplaytomic@gmail.com').should('have.value', 'natachaplaytomic@gmail.com')

    })

    it('Can enter a password', () => {

        const inputPassword = cy.get('.LoginForm input[type="password"]');

        inputPassword.type('natacha123').should('have.value', 'natacha123');

    })
    

    it('Can login and it redirects you to the Dashboard', () => {

        const loginButton = cy.get('.LoginForm .btn');

         loginButton.type('{enter}')
        //loginButton.click()

        cy.request('http://localhost:3000/dashboard');

    })
});