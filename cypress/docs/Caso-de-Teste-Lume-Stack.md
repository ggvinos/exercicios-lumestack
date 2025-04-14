# 📋 Casos de Teste - Real World App (RWA) - Cypress IO

Este documento descreve os casos de teste manuais para as funcionalidades de **Login** e **Registro de Usuário** no projeto Real World App (RWA), utilizado no curso *Guardião da Qualidade* da LumeStack.

---

## 🔐 Funcionalidade: Login

### ✅ Caso de Teste 1: Login com sucesso

- **Objetivo**: Verificar se o sistema permite o login com credenciais válidas.
- **Pré-requisitos**: Ter um usuário já cadastrado no sistema com e-mail e senha válidos.
- **Passos**:
  1. Acessar a página de login.
  2. Preencher o campo **e-mail** com um e-mail válido.
  3. Preencher o campo **senha** com a senha correta.
  4. Clicar no botão **Login**.
- **Resultado Esperado**:
  - O sistema realiza o login com sucesso e redireciona o usuário para o dashboard.

---

### ❌ Caso de Teste 2: Login com falha (credenciais inválidas)

- **Objetivo**: Verificar se o sistema bloqueia o login com e-mail ou senha incorretos.
- **Pré-requisitos**: Ter um usuário registrado.
- **Passos**:
  1. Acessar a página de login.
  2. Inserir um **e-mail inválido** ou inexistente.
  3. Inserir uma **senha incorreta**.
  4. Clicar no botão **Login**.
- **Resultado Esperado**:
  - O sistema exibe uma **mensagem de erro**, como: "E-mail ou senha inválidos".
  - O login **não é realizado**.

---

## 📝 Funcionalidade: Registro de Usuário

### ✅ Caso de Teste 3: Registro com sucesso

- **Objetivo**: Verificar se o sistema permite o registro de um novo usuário com dados válidos.
- **Pré-requisitos**: Estar na tela de registro.
- **Passos**:
  1. Acessar a página de registro.
  2. Preencher todos os campos obrigatórios: nome completo, nome de usuário, e-mail, senha.
  3. Clicar no botão **Registrar**.
- **Resultado Esperado**:
  - O sistema cadastra o novo usuário com sucesso.
  - O usuário é redirecionado para a página de login ou dashboard.

---

### ❌ Caso de Teste 4: Registro com falha (dados incompletos)

- **Objetivo**: Verificar se o sistema impede o registro com dados incompletos.
- **Pré-requisitos**: Estar na tela de registro.
- **Passos**:
  1. Acessar a página de registro.
  2. Preencher **apenas alguns campos obrigatórios** (ex: deixar o e-mail ou senha em branco).
  3. Clicar no botão **Registrar**.
- **Resultado Esperado**:
  - O sistema exibe mensagens de erro indicando os campos obrigatórios que não foram preenchidos.
  - O cadastro **não é realizado**.

---

