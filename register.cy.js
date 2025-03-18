describe('template spec', () => {
  it('passes', () => {
    describe('template spec', () => {
      it('Deve fazer loguin com sucesso', () => {
    
        const newLocal = "http://lojaebac.ebaconline.art.br/minha-conta/"
    cy.visit(newLocal)
    cy.get('#username').type('aluno@ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button'). click()
    
    cy.get('.page-title').shoult('contain' , 'Minha conta')
     cy.get('.woocommerce-MyAccount-content >inth-child(2)').should('contain')
    
        
      })
      it('Deve exibir uma mensagem de erro ao inserir usuario  invalido', ()=> {
    
    cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#password').type('teste@teste.com')
    cy.get('#username').type('@ebac@teste.com')
    cy.get('.woocommerce-form > .button') . click()
    
    
    
      })
    
      it('Deve exibir uma mensagem de erro ao inserir senha invalida', ()=> {
    
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#password').type('@teste.com')
        cy.get('#username').type('aluno@ebac@teste.com')
        cy.get('.woocommerce-form > .button') . click()
    
     
    })
    })
  })
})