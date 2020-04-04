# Be The Hero

A Semana OmniStack é um workshop online gratuito produzido pela Rocketseat. O BeTheHero é um projeto que visa conectar pessoas que 
desejam fazer contribuições monetárias a ONGs (organizações não governamentais) que precisam de ajuda.

Para clonar o repositório, execute o seguinte comando no terminal:

```git clone https://github.com/pushline/Be-the-Hero.git```

# Projeto

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

![](https://github.com/pushline/Be-the-Hero/blob/master/frontend/77811449-13935d80-7079-11ea-9123-4c8ff90a696b.png)
 
![](https://github.com/pushline/Be-the-Hero/blob/master/frontend/77805427-9c51cf80-7060-11ea-88a1-ff3014ffe8ce.gif)

![](https://github.com/pushline/Be-the-Hero/blob/master/frontend/77805360-72001200-7060-11ea-9bc3-dd313a195bf8.gif)


# Instalação

## Pré-Requisitos 

```git, node, express, knex, sqlite, react, react-native, expo```

Clone o repositório, utilizando git clone ou faça o download do repositório.

Para iniciar o **Backend** do React utilize os comandos:
```
cd backend
yarn install
yarn start
```

Para iniciar o **Frontend** do React utilize os comandos:

```
cd frontend
yarn install
yarn start
```

Assim que o processo terminar, automaticamente será aberta no seu navegador a página ``localhost:3000`` contendo o Projeto.

Pro mobile, é o seguinte:

Para testar o **Mobile** do React Native, primeiro coloque o endereço do seu servidor (ou computador) no arquivo src/services/api.js, e depois execute os comandos:

```
# NÃO é preciso executar a linha de baixo caso ja tenha o Expo (CLI) instalado!
yarn global add install expo-cli
cd mobile
yarn install
expo start
```
Assim que o processo terminar, automaticamente será aberta no seu navegador a página ``localhost:19002``. Conecte seu emulador, ou teste o aplicativo por ``LAN``: baixe o aplicativo *Expo* da Play Store ou App Store e em seguida escaneie o código QR. (Se não for por lan, tente por tunnel, espere aparecer no Metro Blunder(informações do Expo sobre o app) a mensagem *Tunnel Ready* então clique em tunnel e escaneie o código QR.
