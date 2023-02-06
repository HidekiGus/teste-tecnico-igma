# Teste técnico igma

## Este teste técnico consiste em implementar uma API de cadastro de clientes

### Os clientes são cadastrados com:

- CPF
- Nome
- Data de nascimento

#

## 🧰 Tecnologias utilizadas

- JavaScript com Node.js e Express.js
- PostgreSQL como banco de dados
- Prisma como ORM

#

## 🚦 Rotas

### 📥 GET /client

Nesta rota, é possível obter os dados de um cliente informando o seu CPF enviando um objeto no seguinte formato:

```
{
  "cpf": "123.456.789-00"    // ou "12345678900"
}
```

E espera-se uma resposta no formato:

```
[
  {
    "id": 1,
    "name": "Nome Sobrenome",
    "cpf": "12345678900",
    "birthdate": "01/01/2000"
  }
]
```

#

## 📮 POST /client

Nesta rota, é possível adicionar um novo cliente enviando seus dados (CPF, nome e data de nascimento) no seguinte formato:

```
{
    "name": "Nome Sobrenome",
    "cpf": "123.456.789-00",    // ou "12345678900"
    "birthdate": "01/01/2000"
}
```

E espera-se uma resposta no formato:

```
'Cliente criado com sucesso!'
```

#

### 📥 GET /clients/:page

Nesta rota, é possível obter os dados de todos os clientes de acordo com o número da página sendo passado como parâmetro da rota. Por padrão, os clientes criados mais recentemente aparecem primeiro ( isso pode ser alterado ).

- Observação: no código é possível definir o número de resultados por página. Por padrão, esse número é de 4 resultados por página. Para alterar esse número, em clientService.js, dentro da função getClientsService altere a variável clientsToTake para o número de resultados desejado por página.

Exemplo:

Para a rota /clients/1 com o número padrão de resultados, espera-se uma resposta no seguinte formato:

```
[
  {
    "id": 4,
    "name": "Nome Sobrenome 4",
    "cpf": "12345678904",
    "birthdate": "01/01/2000"
  },
  {
    "id": 3,
    "name": "Nome Sobrenome 3",
    "cpf": "12345678903",
    "birthdate": "01/01/2000"
  },
  {
    "id": 2,
    "name": "Nome Sobrenome 2",
    "cpf": "12345678902",
    "birthdate": "01/01/2000"
  },
  {
    "id": 1,
    "name": "Nome Sobrenome 1",
    "cpf": "12345678901",
    "birthdate": "01/01/2000"
  }
]
```

#

## Para utilizar a API localmente, basta ter o Docker instalado e seguir esses passos:

### 1. Clone o repositório em uma pasta localmente abrindo o terminal e digitando:

```
git clone https://github.com/HidekiGus/teste-tecnico-igma.git
```

### 2. Na pasta que contém o repositório crie um arquivo .env para as variáveis de ambiente necessárias. No arquivo .env.example você encontra o modelo para a criação do .env, mas aqui vai um exemplo:

```
PORT=   // quando vazia, a aplicação automaticamente define a porta para 4000
DATABASE_URL=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
```

### 3. Com o .env criado e as variáveis adicionadas, agora abra o terminal na mesma pasta e digite:

```
docker compose up --build
```

### 4. Após a construção da imagem e do container estar rodando, você deve poder acessar a API localmente pela URL `http://localhost:4000` ou `http://localhost:PORT` com PORT sendo a variável de ambiente definida no arquivo .env .

### 🎉 Pronto!

#

## Testando a API

### Para testar as rotas da aplicação e ver se está tudo funcionando corretamente, utilize o arquivo `thunder-collection_Testes API.json` no Thunder Client. Para utilizar o arquivo, entre na interface do Thunder Client, como na foto abaixo, e clique em Collections.

![image](https://user-images.githubusercontent.com/40206355/217053580-5f419fab-dae9-4f5f-b65a-c83395e6901a.png)

### Agora, no canto inferior direito da foto mostra um ícone. Clique nele.

![image](https://user-images.githubusercontent.com/40206355/217053806-e9f736aa-5650-45e5-b494-5c419fe0f11c.png)

### Selecione Import.

![image](https://user-images.githubusercontent.com/40206355/217053886-ce9f0181-030f-4ed7-a42e-46b8e989be17.png)

### Agora escolha o arquivo `thunder-collection_Testes API.json`.

### Se tudo der certo, uma nova aba aparecerá escrito `Testes API`

![image](https://user-images.githubusercontent.com/40206355/217054105-9ec9ea6d-6765-4c46-aeec-fbd035431752.png)

### Passando o mouse sobre essa aba, aparecem 3 pontinhos na direita. Clique neles.

![image](https://user-images.githubusercontent.com/40206355/217054239-f9bc6b5a-c108-440e-892b-1bca83ed09f0.png)

### Agora clique em `Run all`.

![image](https://user-images.githubusercontent.com/40206355/217054316-1d29d826-59c3-4cf0-b586-f8c482ff0111.png)

### Na nova tela que apareceu, clique em `Run` no canto superior direito.

![image](https://user-images.githubusercontent.com/40206355/217054464-8a4ae5f6-ddc4-4771-ad13-4cae24a91690.png)

### Caso tudo ocorra como esperado, você deve ver uma tela igual a esta:

![image](https://user-images.githubusercontent.com/40206355/217054559-ebd7a1fa-6142-49d3-bb88-8b542b274def.png)

### 🎉 Prontinho, agora a API está configurada e testada, funcionando corretamente!


