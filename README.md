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
