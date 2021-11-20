# sticker-bot-for-whatsapp
Um simples robô para WhatsApp que converte imagens recebidas de outros usuários em figurinhas.

## Pré-requisitos
Ferramentas necessárias para rodar o projeto:
- Git
- Node

## Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/thalesAlves758/bot-whatsapp.git

# Acesse a pasta do projeto no terminal
$ cd bot-whatsapp

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm start
```

Após realizar todos os passos, se tudo ocorrer bem, um QR Code será apresentado no terminal. Já no aplicativo em seu dispositivo móvel, vá até a seção que lhe permite conectar seu WhatsApp com um outro aparelho e leia o QR Code apresentado no terminal.

Assim, toda vez que alguém mandar uma imagem para seu número, seu perfil gerará uma figurinha daquela imagem e enviará de volta para aquela pessoa.

## :hammer_and_wrench: Tecnologias

- [Node.js](https://nodejs.org/en/)
- [Venom-bot](https://github.com/orkestral/venom)
