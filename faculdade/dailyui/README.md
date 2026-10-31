# DailyUI

Aplicativo mobile desenvolvido como trabalho de faculdade. A ideia é ser um **DailyUI**: um app em que, todo dia, o usuário recebe um novo desafio de design de interface, junto com referências e leituras para se inspirar.

## Funcionalidades

- **Cadastro**: nome, e-mail e senha, com aceite dos termos de uso e política de privacidade.
- **Login**: autenticação local, com opção de mostrar ou ocultar a senha.
- **Sessão persistente**: ao reabrir o app, quem já estava logado vai direto para a tela principal.
- **Desafio do dia**: tela principal com o desafio (atualmente "Home Monitoring Dashboard").
- **Referências**: lista horizontal de ferramentas úteis para design (Maze, Get Waves, Flex Box Builder).
- **Leituras**: lista vertical de artigos sobre UI/UX, com imagem e link para abrir no navegador.
- **Logout** pelo ícone no cabeçalho.

> Os dados de cadastro e de sessão ficam salvos apenas no dispositivo (AsyncStorage). Não há backend, e o desafio e as listas estão definidos em `src/utils/index.js`.

## Tecnologias

- [Expo](https://expo.dev/) SDK 58 e [React Native](https://reactnative.dev/) 0.88
- [React Navigation](https://reactnavigation.org/) 7 (stack)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) para persistência local
- [@expo/vector-icons](https://icons.expo.fyi/) (Ionicons)

## Como rodar

Pré-requisitos: [Node.js](https://nodejs.org/) e npm. Para testar no celular, o app **Expo Go** (ou um emulador Android/iOS).

```bash
npm install
npm start
```

Depois, escaneie o QR code com o Expo Go ou use um dos atalhos:

```bash
npm run android   # emulador ou dispositivo Android
npm run ios       # simulador iOS (somente macOS)
npm run web       # navegador
```

## Estrutura

```
App.js                  # ponto de entrada
src/
  routes.js             # navegação (Home, Login, Register, HomeScreen)
  pages/
    Home/               # decide para onde ir conforme o login salvo
    Login/
    Register/
    HomeScreen/         # tela principal com o desafio e as listas
  components/List/      # lista reutilizável (horizontal e vertical)
  utils/index.js        # dados de referências e leituras
assets/                 # ícones, splash, logo e termos de uso (PDF)
```

## Histórico

- Fev/2021: entrega do wireframe.
- Mai/2021: tela principal do DailyUI.
- 2026: migração de yarn para npm e atualização do Expo SDK 41 para o 58, para corrigir os alertas do Dependabot.

## Limitações conhecidas

- Os desafios não mudam sozinhos: ainda não há um desafio novo por dia, só o conteúdo fixo do código.
- O botão de baixar os termos de uso no cadastro ainda não faz o download.
- A senha é guardada em texto puro no AsyncStorage. Serve para fins acadêmicos, mas não deve ser usada em produção.
- A tela principal não tem rolagem para a lista "Leituras" quando o conteúdo passa da altura da tela.
