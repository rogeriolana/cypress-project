describe('Testes de Login na Loja EBAC', () => {
  beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
  });

  it('Deve fazer login com sucesso', () => {
      cy.get('#username').type('aluno@ebac@teste.com');
      cy.get('#password').type('teste@teste.com');
      cy.get('.woocommerce-form > .button').click();
      cy.get('.page-title').should('contain', 'Minha conta');
     
  });

  it('Deve exibir mensagem de erro ao inserir usuário inválido', () => {
      cy.get('#username').type('aluno_ebac@78');
      cy.get('#password').type('teste@teste.com');
      cy.get('.woocommerce-form > .button').click();
      cy.get('.woocommerce-error').should('exist'); 
    const newLocal = '.woocommerce-error';
      cy.get(newLocal).should('contain', 'Erro: O usuário aluno_ebac@78 não está registrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.');
  });

  it('Deve exibir mensagem de erro ao inserir senha inválida', () => {
      cy.get('#username').type('aluno_ebac@teste.com');
      cy.get('#password').type('senhainvalida');
      cy.get('.woocommerce-form > .button').click();
      cy.get('.woocommerce-error').should('exist');
      cy.get('.woocommerce-error>li').should('include.text', 'A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?');
  });

  it('Deve exibir mensagem de erro ao inserir usuario e senha incorretos', () => {
      cy.get('#username').type('usuarioinvalido@teste.com');
      cy.get('#password').type('senhainvalida');
      cy.get('.woocommerce-form > .button').click();
      cy.get('.woocommerce-error').should('exist');
      cy.get('.woocommerce-error>li').should('include.text', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.');
  });

  it('Deve exibir mensagem de erro ao inserir usuario em branco', () => {
      cy.get('#password').type('senhainvalida');
      cy.get('.woocommerce-form > .button').click();
      cy.get('.woocommerce-error').should('exist');
      cy.get('.woocommerce-error>li').should('contain', ' Nome de usuário é obrigatório.');
  });

  it('Deve exibir mensagem de erro ao inserir senha em branco', () => {
      cy.get('#username').type('aluno@ebac@teste.com');
      cy.get('.woocommerce-form > .button').click();
      cy.get('.woocommerce-error').should('exist');
      cy.get('.woocommerce-error').should('contain', 'Erro: O campo da senha está vazio.');
  });

  it('Deve exibir mensagem de erro ao inserir usuario e senha em branco', () => {
      cy.get('.woocommerce-form > .button').click();
      cy.get('.woocommerce-error>li').should('exist');
      cy.get('.woocommerce-error>li').should('include.text', 'Nome de usuário é obrigatório.');
  });
});
