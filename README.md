API-usuarios-express-prisma
-

Este projeto foi desenvolvido para estudo da linguagem JavaScript utilizando o framework Express.js e o ORM Prisma. A aplicação implementa uma API básica para gerenciamento de usuários, permitindo criação, listagem e exclusão de registros em um banco de dados.

**Tecnologias utilizadas**
- JavaScript (Node.js)
- Express.js para criação do servidor e gerenciamento das rotas HTTP
- Prisma ORM para comunicação com o banco de dados
- Banco de dados relacional (MongoDB)

**Funcionalidades principais**
- Criação de usuários via método POST na rota /usuarios
- Listagem de todos os usuários via método GET na rota /usuarios
- Exclusão de usuários via método DELETE na rota /usuarios/:id
- Tratamento básico de erros e respostas HTTP

  **Como Executar:**
1. Instale as dependências do projeto com:
   
  `npm install express @prisma/client`

2. Configure seu banco de dados e ajuste o arquivo prisma/schema.prisma conforme sua conexão.
3. Gere o cliente Prisma com:

  `npx prisma generate`
  
4. A API ficará disponível na porta 2007. Você pode testar as rotas usando ferramentas como Postman ou Insomnia.
