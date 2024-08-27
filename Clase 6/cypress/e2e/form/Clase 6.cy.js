describe('Clase 6',{testIsolation:false},() =>{

    it('Validar informacion de Hotel', () => {
        cy.visit('https://automationintesting.online/')
        cy.get('span.fa.fa-home')
        cy.getP('Shady Meadows B&B')
        cy.getP('The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S')
        cy.get('span.fa.fa-home')
        cy.getP('012345678901')
        cy.get('span.fa.fa-envelope')
        cy.getP('fake@fakeemail.com')
        cy.passed()

    })

    it('Validar Visibilidad de imagenes', () =>{
        cy.visit('https://automationintesting.online/')
        cy.get('.hotel-logoUrl').should('be.visible')
        cy.get('.img-responsive').should('be.visible')
        cy.passed()
    })

    it('Validar descripcion de hotel', () =>{
        cy.visit('https://automationintesting.online/')
        cy.getP('Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire.')
        cy.getP('A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.')
        cy.passed()
  })

  it('Validar envío de form con data incorrecta',()=>{
    cy.code400()
    cy.log('Set de datos incorrectos...')
    cy.get('input[placeholder="Name"]').type('asd')
    cy.get('input[placeholder="Email"]').type('asdasd')
    cy.get('input[placeholder="Phone"]').type('asdasd')
    cy.get('input[placeholder="Subject"]').type('asdasd')
    cy.get('[data-testid="ContactDescription"]').type('asdasd')
    cy.get('#submitContact').click()
    cy.wait400()


    cy.get('.alert').should('be.visible')
    cy.getP('Phone must be between 11 and 21 characters.')
    cy.getP('debe ser una dirección de correo electrónico con formato correcto')
    cy.getP('Message must be between 20 and 2000 characters.')
})


it('Validar envío de form con data correcta',()=>{
    cy.code201()
    cy.log('Set de datos incorrectos...')
    cy.get('input[placeholder="Name"]').type('Juan Pérez')
    cy.get('input[placeholder="Email"]').type('juan@gmail.com')
    cy.get('input[placeholder="Phone"]').type('35123696457')
    cy.get('input[placeholder="Subject"]').type('Reserva de habitación para fecha X')
    cy.get('[data-testid="ContactDescription"]').type('loremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestlo') 
    cy.get('#submitContact').click()
    cy.wait201()
})
})