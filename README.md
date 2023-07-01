# API com JWT
🔑 Aplicação backend usando conceitos de API junto com autenticação JWT.

# Rodar o projeto
```bash
npm install
npm run start
```

## Testes da API

O arquivo `Insomnia.json`, na raiz do projeto, é uma coleção de requisições que foi exportada do [Insomnia][insomnia-site].

Então para acessar todo o ambiente de requisições já prontas para o teste, basta baixar o app do Insomnia na sua máquina e realizar a importação desse arquivo.

# Objetivo

> Desenvolver uma aplicação servidora em que o tutor (cpf, nome e e-mail) possa responder pela tutoria de um ou mais pet: codigo_pet, nome_pet e genero_pet. Se a altura do pet for menor ou igual a 15 cm a aplicação deve associar da tabela altura_pet a altura pequeno. Se a altura for maior do que 15 cm e menor do que 45 cm associar altura média, caso contrário associar altura alta. Essa aplicação tem que atender as requisições CRUD oriundas de qualquer cliente-server por meio de uma API Rest. Como também permitir consultas de pet por tutor e altura. A tecnologia para a implementação da aplicação é de livre escolha pela dupla. Além disso, inserir a utilização de token (JWT) em um dos end-points da API ou se preferir implemente uma funcionalidade de login (usuário e senha) com token

[insomnia-site]: https://insomnia.rest/