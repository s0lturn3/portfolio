# Backend Node.js para Envio de E-mails

Este é um backend simples desenvolvido em **Node.js** com **Express** e **Nodemailer**. Ele serve para receber dados de um formulário de contato e enviá-los por e-mail usando o serviço SMTP do Gmail.

## 📌 Tecnologias Utilizadas
- **Node.js** - Runtime JavaScript
- **Express** - Framework para criação da API
- **Nodemailer** - Biblioteca para envio de e-mails
- **Cors** - Middleware para habilitar CORS
- **Dotenv** - Gerenciamento de variáveis de ambiente

## 📂 Estrutura do Projeto
```
/backend-node
│── /src
│   │── /controllers       # Lógica das requisições HTTP
│   │── /routes            # Definição das rotas da API
│   │── /models
│   │── /utils
│   │── /services
│   │── /middlewares       # Middlewares (ex: autenticação, logs, etc.)
│   └── server.js          # Inicializa o servidor
│
│── .env                   # Variáveis de ambiente (não deve ser versionado)
│── package.json           # Dependências e scripts
│── README.md              # Documentação do projeto
```

## 🚀 Como Rodar o Projeto

### 1️⃣ Configurar o Ambiente
1. Certifique-se de ter o **Node.js** instalado.
2. Clone este repositório e entre na pasta do projeto:
   ```sh
   git clone https://github.com/seu-repositorio/backend-node.git
   cd backend-node
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Crie um arquivo `.env` e adicione suas credenciais do Gmail:
   ```env
   EMAIL_USER=seuemail@gmail.com
   EMAIL_PASS=sua_senha_de_app
   ```

### 2️⃣ Executar o Servidor
```sh
node server.js
```
O servidor rodará em **http://localhost:5000**

## 📬 Como Testar a API
Você pode testar a API usando o **Postman** ou **cURL**. Exemplo de requisição:
```sh
curl -X POST http://localhost:5000/send-email -H "Content-Type: application/json" -d '{"name":"Erick", "email":"seuemail@gmail.com", "message":"Teste de email"}'
```
Se tudo estiver correto, você receberá o e-mail na sua caixa de entrada.

---

## 📌 Melhorias Futuras
✅ Adicionar validação de entrada.  
✅ Melhorar logs e tratamento de erros.  
✅ Implementar suporte para serviços como SendGrid ou Mailgun.  

📧 **Dúvidas ou sugestões?** Me avise! 🚀
