# Biscoito da Sorte

Aplicativo mobile em React Native + Expo para mostrar frases aleatórias de sorte ao tocar em um biscoito.

## Descrição

Este projeto é uma pequena aplicação interativa em que o usuário toca em um biscoito para "quebrá-lo" e recebe uma frase motivacional ou de sorte. A interface também inclui botões para voltar e abrir outro biscoito.

A aplicação usa:
- React Native
- Expo
- Expo Audio
- imagens e assets locais

## Funcionalidades

- Tela inicial com biscoito
- Clique para quebrar o biscoito
- Frase aleatória exibida em uma caixa de texto
- Botão para voltar ao início
- Botão para abrir outro biscoito
- Efeito sonoro ao clicar no biscoito

## Tecnologias

- React Native
- Expo
- JavaScript
- Expo Audio

## Estrutura do projeto

```text
mobile/
├── assets/
│   ├── biscoito.svg
│   ├── biscoito-quebrado.svg
│   ├── sakura.jpg
│   └── som.mp3
├── App.js
├── app.json
├── index.js
├── package.json
├── package-lock.json
├── README.md
├── node_modules/
└── dist/
```

## Instalação

1. Abra o terminal na pasta do projeto:

```bash
cd mobile
```

2. Instale as dependências:

```bash
npm install
```

## Execução

Para iniciar o app em modo de desenvolvimento:

```bash
npx expo start
```

Se o projeto estiver mostrando problema de cache, use:

```bash
npx expo start --clear
```

## Como o áudio funciona

O som do clique é carregado localmente a partir do arquivo [mobile/assets/som.mp3](mobile/assets/som.mp3):

```js
const som = useAudioPlayer(require("./assets/som.mp3"));
```

Ao clicar no biscoito ou no botão de outro biscoito, o app chama o som:

```js
som.seekTo(0);
som.play();
```

Isso faz o efeito sonoro reiniciar sempre que o usuário toca novamente.

## Observações importantes

- O arquivo de áudio deve ficar dentro da pasta [mobile/assets](mobile/assets).
- O nome do arquivo precisa bater exatamente com o caminho usado no código.
- Se o som não tocar, verifique:
  - se o arquivo existe
  - se o nome do arquivo está correto
  - se o app foi reiniciado após alteração
  - se o ambiente está com as dependências do Expo atualizadas

## Licença

Este projeto foi desenvolvido como exercício de revisão em React Native/Expo.

## Conclusão

O aplicativo é uma demonstração simples de interface interativa, geração aleatória de frases e reprodução de áudio local em React Native com Expo.
