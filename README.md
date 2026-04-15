# Login App - TDWEB PUCPR

Aplicação React desenvolvida para a disciplina **Técnicas Para Desenvolvimento Web** da **PUCPR**.

## Funcionalidades

- **Cadastro**: Registro de usuário com nome, sobrenome, data de nascimento, e-mail e senha. Cria o usuário no Firebase Authentication e salva os dados no Firestore.
- **Login**: Autenticação via Firebase Authentication com e-mail e senha.
- **Página Principal**: Exibe os dados do usuário logado (nome, sobrenome e data de nascimento) a partir do Firestore.

## Tecnologias

- React 19
- React Router Dom (rotas em arquivo separado)
- Firebase Authentication (provedor e-mail/senha)
- Cloud Firestore (armazenamento de dados do usuário)
- GitHub Pages (hospedagem)

## Como executar localmente

```bash
npm install
npm start
```

## Build e deploy

O deploy é feito automaticamente via GitHub Actions ao fazer push na branch `main`.

```bash
npm run build
```
