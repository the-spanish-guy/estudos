# Estudos

Projetos que fiz durante a faculdade (FATEC) e estudos avulsos.

## Projetos

| Pasta | O que é | Stack |
|---|---|---|
| `faculdade/FATEC/biblioteca-backend` | API de biblioteca (livros, autores, alunos, empréstimos, upload de capa) | Express, Sequelize, MySQL, multer |
| `faculdade/FATEC/biblioteca-app` | App mobile da biblioteca | Expo SDK 58, React Native, React Navigation |
| `faculdade/FATEC/api-soa` | API de clientes, devs e projetos | Express, Sequelize, MySQL |
| `faculdade/FATEC/BD` | Modelos (`.mwb`) e scripts SQL dos bancos | MySQL Workbench |
| `go` | Estudos em Go | Go |

Os backends esperam um MySQL local; a configuração fica em `src/config/database.js` de cada projeto e o `baseURL` do app em `biblioteca-app/src/services/api.js`.

## Rodando

Use o Node instalado localmente (veja `engines` em cada `package.json`).

```sh
cd faculdade/FATEC/<projeto>
npm install
npm run dev      # backends (nodemon)
npm start        # biblioteca-app (Expo)
```

## Regras de dependências

- **npm** como gerenciador, com um único `package-lock.json` por projeto (nada de `yarn.lock`).
- **Versões fixas**, sem `^` nem `~`. Cada projeto tem um `.npmrc` com `save-exact=true`, então `npm install <pacote>` já grava a versão exata.
- **Sempre a versão mais recente**. Se uma dependência não acompanha a SDK legada, migra-se a SDK e reavalia-se se a dependência ainda é necessária.
- **Node local** é a referência (`engines.node` em cada projeto).
- No `biblioteca-app`, atualize pacotes do Expo em conjunto com `npx expo install --fix`, e não um a um.

O Dependabot (`.github/dependabot.yml`) verifica os três projetos npm toda semana e agrupa as atualizações minor e patch em um PR por projeto.

## Pontos conhecidos

- `npm audit` ainda aponta alguns alertas moderate/high em ferramentas de build (`zod`, `deepmerge`) e no `uuid` dentro do `sequelize`. Os "fixes" sugeridos pelo `npm audit fix --force` rebaixam o Expo e o Sequelize, então não devem ser aplicados.
- Credenciais de banco e IP da API estão fixos no código, por ser projeto de estudo. Não usar em produção.
