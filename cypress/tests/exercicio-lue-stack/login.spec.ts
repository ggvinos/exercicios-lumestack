describe(' Autenticação - Real World App (RWA)', () => {
    const timestamp = Date.now();
    const username = `viniteste_${timestamp}`;
    const password = 'senhaSegura123';
  
    describe(' Registro de Usuário', () => {
      
      it(' Deve registrar um novo usuário com informações válidas', () => {
        cy.visit('http://localhost:3000/signup');
        cy.get('input[name="firstName"]').type('Vinicios');
        cy.get('input[name="lastName"]').type('Ferreira');
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('input[name="confirmPassword"]').type(password);
        cy.get('button[type="submit"]').click();
  
        cy.url().should('include', '/signin');
      });
  
      it('❌ Deve manter o botão desativado ao tentar registrar sem preencher todos os campos', () => {
        cy.visit('http://localhost:3000/signup');
        cy.get('input[name="firstName"]').type('Maria');
        cy.get('button[type="submit"]').should('be.disabled');
      });
    });
  
    describe(' Login de Usuário', () => {
  
      it('Deve fazer login com o usuário recém-registrado', () => {
        cy.visit('http://localhost:3000/signin');
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('button[type="submit"]').click();
  
        cy.url().should('include', '/'); 
        cy.contains('My Account').should('be.visible');
      });
  
      it('Deve exibir erro com credenciais inválidas', () => {
        cy.visit('http://localhost:3000/signin');
        cy.get('input[name="username"]').type('usuario_invalido');
        cy.get('input[name="password"]').type('senha_errada');
        cy.get('button[type="submit"]').click();
  
        cy.contains('Username or password is invalid').should('be.visible');
      });
    });
  });
  