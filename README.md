# Meritt Challenge - Teste Técnico

Bem vindo ao meu teste 😄

Me esforcei para atender a todos os requisitos e entregar um código de qualidade. Espero que o resultado seja satisfatório.

Caso você tenha alguma dúvida ou sugestão de melhoria, pode abrir uma Issue ou PR que ficarei feliz em aperfeiçoar o que for preciso.

As tecnologias usadas foram:
- [NodeJS](https://nodejs.org/en/);
- [Dotenv](https://www.npmjs.com/package/dotenv);
- [Express](https://www.npmjs.com/package/express);
- [Jest](https://jestjs.io/).

## O que consiste esta aplicação?

O objetivo foi criar uma API que recebesse uma posição do tabuleiro de xadrez (exemplo: A5) e retornasse as próximas posições possíveis.

A ideia inicial foi se concentrar no movimento do cavalo (knight). Então, a API tem apenas uma rota que retorna as próximas posições possíveis do cavalo.

## Como utilizar esta API?

### Requisitos

Para rodar a aplicação, você precisa necessariamente ter o Node e o NPM instalados na sua máquina.

### Passo 1: clonando o repositório

Primeiramente você deve fazer o clone deste repositório, através do comando:

```
$ git clone https://github.com/mayconb2/meritt-challenge.git
```

### Passo 2: instalando as dependências

O clone feito do código fonte não traz todas as dependências do projeto. Para realizar a instalação, vá até a raiz do projeto, onde encontrase o arquivo package.json, e execute o seguinte comando:

```
$ npm install
```

### Passo 3: configurando as variáveis de ambiente

A aplicação possui apenas uma variável de ambiente, responsável pela porta que que irá subir o servidor Node.

Para configurá-la, você deve criar um arquivo com o nome .env, na raiz do projeto, e adicionar a seguinte linha:

```
PORT=SUA_PORTA
```

Substitua "SUA_PORTA" pela porta que você deseja utilizar, por exemplo, 3000.

### Passo 4: subindo servidor node

Vá até o diretório da raiz do projeto e execute o seguinte comando no terminal:

```
$ node src/index.js
```

O servidor irá subir na porta definida no arquivo .env. Se você escolheu a porta 3000, deverá a seguinte instrução no terminal:

```
Application started on port 3000
```

## Fazendo a requisição para API

Com o servidor de pé, você poderá fazer uma requisição do tipo GET para única rota disponível na API. Você usar algum programa da sua preferência, como o Postman ou Insomnia, ou utilizar um navegador.

A rota será:

```
http://localhost:3000/knight/next-position/{posição_atual_no_tabuleiro}
```

Você deve substituir a posição_atual_no_tabuleiro por uma posição válida, como por exemplo 'b4'. 

Assim, a API irá retornar um json com a chave "nextValidPositions" e o valor sendo um array com as próximas posições válidas do cavalo de acordo com a posição atual informada.

Caso informe uma posição inválida, a API irá retornar um erro e o status code 400.

## Testes

Esta aplicação possui 4 testes, todos relacionados ao serviço positionValidatorService.js. Basicamente verifica se as posições recebidas são válidas ou não. Para rodar os testes, basta executar o seguinte comando no terminal:

```
$ npm test
```

## Organização do Projeto

O código fonte está dentro da pasta src e está divido em camadas: routes, controllers e services. O entry point da aplicação é o arquivo index.js.

Ele foi pensado dessa maneira visando o que é adotado no mercado e também porque facilita caso haja necessidade de futuras implementações.

Na pasta routes ficam as rotas. Como a API inicialmente tem apenas uma rota, referente à peça do cavalo, há apenas o arquivo knightRouter.js. Ele faz o mapeamento da rota, que é "knight/next-position/:currentPosition", sendo o currentPosition o parâmetro que a API espera receber com a posição atual do cavalo. Então, a rota chama uma função disponível no controller knightController.js.

Esse controller é simples e possui apenas uma função, calculateNextValidPositions, que vem do serviço knightNextPositionService.js. Essa função, por sua vez, recebe por parâmetro a posição atual vinda da requisição.

Já o serviço knightNextPositionService.js é responsável por retornar quais são as próximas posições válidas do cavalo. Ele utiliza outros dois serviços: boardPositionsService.js e positionValidatorService.js. Este primeiro é responsável por fornecer todas as posições do tabuleiro de xadrez. O segundo serviço verifica se a posição recebida é válida ou não, e lança um erro quando não for. Decidi deixar esses dois serviços separados pois, caso no futuro implemente novas funcionalidades da API, como calcular os próximos movimentos de outras peças, eles podem utilizar estes dois serviços também, evitando repetição de código.

Como é possível observar, optou-se por utilizar uma abordagem um pouco mais funcional para o projeto. Pelo fato do javascript ser uma linguagem multiparadigma, pode-se usar tanto uma abordagem funcional ou orientada a objetos.

## Como contribuir

Você pode contribuir abrindo Issues ou MR neste projeto. O que pode ser feito:

- Tradução do README para inglês, dando uma maior abrangência para o projeto;
- Criar novas rotas e serviços para outras peças do xadrez;
- Ampliar os testes;
- Dar sugestões de melhorias no código.
