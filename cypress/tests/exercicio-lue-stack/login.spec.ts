describe('Autenticação e Transações - Real World App (RWA)', () => {
  const timestamp = Date.now();
  const username = `viniteste_${timestamp}`;
  const password = 'senhaSegura123';
  const saldoInsuficienteUser = `viniteste_saldoinsuficiente_${timestamp}`;

  // ----------------------------
  // REGISTRO DE USUÁRIO
  // ----------------------------
  context('Registro de Usuário', () => {

    it('Deve registrar um novo usuário com informações válidas', () => {
      cy.visit('http://localhost:3000/signup');
      cy.get('input[name="firstName"]').type('Vinicios');
      cy.get('input[name="lastName"]').type('Ferreira');
      cy.get('input[name="username"]').type(username);
      cy.get('input[name="password"]').type(password);
      cy.get('input[name="confirmPassword"]').type(password);
      cy.get('button[type="submit"]').click();

      cy.url().should('include', '/signin');
    });

    it('Deve manter o botão desativado ao tentar registrar sem preencher todos os campos', () => {
      cy.visit('http://localhost:3000/signup');
      cy.get('input[name="firstName"]').type('Maria');
      cy.get('button[type="submit"]').should('be.disabled');
    });
  });

  // ----------------------------
  // LOGIN
  // ----------------------------
  context('Login de Usuário', () => {

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

  // ----------------------------
  // TRANSFERÊNCIAS
  // ----------------------------
  context('Transações ', () => {

    before(() => {
      // Login antes do teste
      cy.visit('http://localhost:3000/signin');
      cy.get('input[name="username"]').type(username);
      cy.get('input[name="password"]').type(password);
      cy.get('button[type="submit"]').click();
    });

    it('Enviar dinheiro com saldo suficiente', () => {
      cy.get('[data-test="user-onboarding-next"]').click()
      cy.get('#bankaccount-bankName-input').type("Banco Aleatorio")
      cy.get('#bankaccount-routingNumber-input').type("123456789")
      cy.get('#bankaccount-accountNumber-input').type("1234567890")
      cy.get('[data-test="bankaccount-submit"]').click()
      cy.get('[data-test="user-onboarding-next"]').click()
      
      //Nova transição
      cy.get('[data-test="nav-top-new-transaction"]').click() 
      cy.get('.MuiListItemText-multiline').eq(2).click({force:true})
      cy.get('#amount').type("10")
      cy.get('#transaction-create-description-input').type("10 reais pra comprar pão")
      cy.get('[data-test="transaction-create-submit-payment"]').click()
      cy.get('[data-test="new-transaction-create-another-transaction"]').click()
    });

    it('Enviar dinheiro com saldo insuficiente', () => {

      // Login antes do teste
      cy.visit('http://localhost:3000/signin');
      cy.get('input[name="username"]').type(username);
      cy.get('input[name="password"]').type(password);
      cy.get('button[type="submit"]').click();
      
      //Nova transição
      cy.get('[data-test="nav-top-new-transaction"]').click() 
      cy.get('.MuiListItemText-multiline').eq(2).click({force:true})
      cy.get('#amount').type("10000")
      cy.get('#transaction-create-description-input').type("10000 reais pra comprar um carro")
      cy.get('[data-test="transaction-create-submit-payment"]').click()
      cy.get('[data-test="new-transaction-create-another-transaction"]').click()

    });
  });
});
