<h1 align="center"> Doctor-API </h1>


## Descrição do Projeto
<p align="justify"> Desenvolver um sistema que faça a gestão de cadastros de médicos.</p>


### Topico Completados

- [x] Cadastro de Doutor
- [x] Editação de Doutor
- [x] Listagem de Doutor
- [x] Exclusão de Doutor
- [x] Criar mecanismo de busca por todos os campos do cadastro do médico, incluindo o endereço
- [x] Utilizar ferramenta de validação 
- [x] Funções especialistas (Realizam somente uma operação)
- [x] Para documentação e requisição utilizar o Postman, Insomnia ou Swagger (Enviar junto com o teste o workspace utilizado)
- [x] Criar arquivo docker compose para avaliação do teste (ATENÇÃO: Sem esse arquivo seu teste não será executado)
- [x] Testes unitários


### Executando o projeto

  1. Execute ```yarn start:dev``` raiz da aplicação.
  2. Caso não possua o docker instaldo na sua maquina siga essas instruções [https://github.com/codeedu/wsl2-docker-quickstart](https://github.com/codeedu/wsl2-docker-quickstart) 
  1. Execute ```docker-compose up -d``` para iniciar o container do redis. 
  3. A aplicação estará disponível no endereço [http://localhost:3000]tp://localhost:3000)
  4. Execute ``yarn test`` para rodar os testes unitarios da aplicação
  4. Execute ``yarn typeorm migration:run`` para rodar as migrations
  6. Documentação em swagger para ter acesso a rota e testar os endpoints com as funções [http://localhost:3000/api](http://localhost:3000/api))


### Comandos úteis
  - `yarn` instalar bibliotecas
  
### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [nestJs](https://docs.nestjs.com)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://www.npmjs.com/package/typeorm)
- [Swagger](https://docs.nestjs.com/openapi/types-and-parameters#types-and-parameters)
- [Jest](https://jestjs.io)
- [Eslintrc](https://eslint.org/docs/user-guide/configuring/)
- [Prettier](https://prettier.io)
- [Docker](https://www.docker.com)
  
  
  
  
