// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// cypress/support/commands.js
Cypress.Commands.add('getP', (paragraph) => {
    cy.get('p').contains(paragraph)
})

Cypress.Commands.add('passed', () => {
    cy.log('Test Aprobado.')
})

Cypress.Commands.add('code201', () => {
    cy.intercept('POST', 'https://automationintesting.online/message/', (req) => {
        req.continue((res) => {
            expect(res.statusCode).to.eq(201)
        });
    }).as('contactRequest');
})

Cypress.Commands.add('wait201', () => {
    cy.wait('@contactRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(201)
    })
})


Cypress.Commands.add('code400', () => {
    cy.intercept('POST', 'https://automationintesting.online/message/', (req) => {
        req.continue((res) => {
            expect(res.statusCode).to.eq(400)
        });
    }).as('contactRequest');
})

Cypress.Commands.add('wait400', () => {
    cy.wait('@contactRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(400)
    })
})

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })