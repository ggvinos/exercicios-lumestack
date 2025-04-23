# 📋 Casos de Teste - Real World App (RWA) - Cypress IO

Este documento descreve os casos de teste manuais para as funcionalidades de **Login**, **Registro de Usuário** e **Transações (Transferências)** no projeto Real World App (RWA), utilizado no curso *Guardião da Qualidade* da LumeStack.

---

## 🔐 Funcionalidade: Login

### ✅ Caso de Teste 1: Login com sucesso

- **Objetivo**: Verificar se o sistema permite o login com credenciais válidas.
- **Pré-requisitos**: Ter um usuário já cadastrado no sistema com nome de usuário e senha válidos.
- **Passos**:
  1. Acessar a página de login.
  2. Preencher o campo **nome de usuário** com um nome válido.
  3. Preencher o campo **senha** com a senha correta.
  4. Clicar no botão **Login**.
- **Resultado Esperado**:
  - O sistema realiza o login com sucesso e redireciona o usuário para o dashboard.

---

### ❌ Caso de Teste 2: Login com falha (credenciais inválidas)

- **Objetivo**: Verificar se o sistema bloqueia o login com nome de usuário ou senha incorretos.
- **Pré-requisitos**: Ter um usuário registrado.
- **Passos**:
  1. Acessar a página de login.
  2. Inserir um **nome de usuário inválido** ou inexistente.
  3. Inserir uma **senha incorreta**.
  4. Clicar no botão **Login**.
- **Resultado Esperado**:
  - O sistema exibe uma **mensagem de erro**, como: "Username or password is invalid".
  - O login **não é realizado**.

---

## 📝 Funcionalidade: Registro de Usuário

### ✅ Caso de Teste 3: Registro com sucesso

- **Objetivo**: Verificar se o sistema permite o registro de um novo usuário com dados válidos.
- **Pré-requisitos**: Estar na tela de registro.
- **Passos**:
  1. Acessar a página de registro.
  2. Preencher todos os campos obrigatórios: nome, sobrenome, nome de usuário, senha e confirmação de senha.
  3. Clicar no botão **Registrar**.
- **Resultado Esperado**:
  - O sistema cadastra o novo usuário com sucesso.
  - O usuário é redirecionado para a página de login.

---

### ❌ Caso de Teste 4: Registro com falha (dados incompletos)

- **Objetivo**: Verificar se o sistema impede o registro com dados incompletos.
- **Pré-requisitos**: Estar na tela de registro.
- **Passos**:
  1. Acessar a página de registro.
  2. Preencher **apenas alguns campos obrigatórios** (ex: deixar a senha em branco).
  3. Clicar no botão **Registrar**.
- **Resultado Esperado**:
  - O sistema exibe mensagens de erro indicando os campos obrigatórios que não foram preenchidos.
  - O cadastro **não é realizado**.

---

## 💸 Funcionalidade: Transações (Transferências)

### ✅ Caso de Teste 5: Enviar dinheiro com saldo suficiente

- **Objetivo**: Verificar se o sistema permite realizar uma transferência com saldo disponível.
- **Pré-requisitos**:
  - Estar logado com um usuário que possui saldo suficiente.
  - Ter uma conta bancária vinculada.
- **Passos**:
  1. Acessar a área de nova transação.
  2. Selecionar um usuário para enviar o valor.
  3. Preencher o campo de valor com um valor disponível no saldo (ex: R$10).
  4. Preencher a descrição da transferência.
  5. Clicar em **Enviar pagamento**.
- **Resultado Esperado**:
  - A transferência é realizada com sucesso.
  - O saldo do usuário é reduzido conforme o valor enviado.
  - Uma confirmação é exibida.

---

### ❌ Caso de Teste 6: Enviar dinheiro com saldo insuficiente

- **Objetivo**: Verificar se o sistema impede transações com valor superior ao saldo disponível.
- **Pré-requisitos**:
  - Estar logado com um usuário sem saldo suficiente.
- **Passos**:
  1. Acessar a área de nova transação.
  2. Selecionar um usuário para envio.
  3. Preencher o campo de valor com um valor maior do que o saldo (ex: R$10.000).
  4. Preencher a descrição da transferência.
  5. Clicar em **Enviar pagamento**.
- **Resultado Esperado**:
  - O sistema exibe uma mensagem de erro, como: "Saldo insuficiente" ou "Insufficient funds".
  - A transferência **não é realizada**.
