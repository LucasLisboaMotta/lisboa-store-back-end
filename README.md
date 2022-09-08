# Lisboa Store Back-End


Olá, bem-vindo ao meu repositório de back-end.
Este projeto trabalha em conjunto com este outro repositório https://github.com/LucasLisboaMotta/lisboa-store-front-end.

Este repositório também está no ar, disponível no site da heroku. Para acessar, segue o link: https://lisboa-store-back-end.herokuapp.com/

Esta API faz interação com banco de dados, com uma tabela de produtos. Permitindo seu cadastro, leitura, edição e exclusão dos produtos.

Cada produto vem na seguinte estrutura:

```
{
  _id, // string
  product, // string
  value, // string
  description, //string
  updated, // date
  created, // date
}
```

Para iniciar o projeto, é necessário utilizar o mongoDB
caso não tenha instalado em sua máquina, você pode inciar utilizando docker com o seguinte comando 

```
docker run --name mongoDB -p 27017:27017 -d mongo
```

você deve começar clonando o repositório com o seguinte comando:

```
git clone git@github.com:LucasLisboaMotta/lisboa-store-back-end.git
```

após clonar o repositório, você deve instalar suas dependências com o comando

```
npm install
```

Ele usara como padrão as porta 3001 para rodar a API, e a porta 27017 para se conectar ao mongoDB. Caso deseje utilizar outras portas, você pode renomear o arquivo `.env.example` para `.env`, e colocar suas variáveis de ambiente nele.

Após configurar as variáveis de ambiente, você pode iniciá-lo com o comando
``` 
npm install
```
Todos os métodos foram configurados na rota /products, e nele possui 7 rotas.
```
get products/ retorna um array com todos os produtos

get products/:id retorna um objeto contendo um único produto

get products/search?q=termo retorna um array com objetos que combina com o termo passado

post products/ retorna um objeto contendo o produto cadastrado

put products/:id retorna um objeto contendo o produto atualizado

patch products/:id retorna um objeto contendo o produto atualizado

delete products/:id deleta um produto e retorna apenas o status de produto deletado
```
Neste projeto foram feitos testes unitários e de integração da rota post products/, você pode ver os testes utilizando o comando
```
npm test
npm run test:coverage
```