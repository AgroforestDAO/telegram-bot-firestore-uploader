# telegram-bot-firestore-uploader

# Documentação do Bot do Telegram para Agroflorestas

Este projeto é um bot do Telegram que se conecta ao Firestore para salvar fotos e dados das provas de sucessão dos sistemas agroflorestais cadastrados no sistema da AgroforestDAO. A documentação abaixo detalha a estrutura do projeto, as dependências e as principais funcionalidades.

## Configuração Inicial

### bot.js

Este arquivo é o ponto de entrada da aplicação. Ele configura o bot do Telegram usando a biblioteca Telegraf e define os manipuladores de eventos para iniciar o bot, lidar com mensagens de texto e fotos.

- **Dependências**: `dotenv`, `telegraf`.
- **Variáveis de Ambiente**: `BOT_TOKEN` para autenticação do bot do Telegram.
- **Inicialização do Bot**: Cria uma instância do bot usando o token fornecido e define os manipuladores de eventos.
- **Gerenciamento de Sinal**: O bot é configurado para parar corretamente em sinais `SIGINT` e `SIGTERM`.

### botInteractions.js

Este arquivo contém as funções que lidam com as interações do usuário com o bot.

- **Dependências**: `telegraf/markup` para criar teclados personalizados.
- **Funções de Manipulação**: `handleStart`, `handleText`, `handlePhoto` para lidar com diferentes tipos de mensagens do usuário.
- **Gerenciamento de Estado do Usuário**: Funções para gerenciar o estado do usuário (`getUserState`, `setUserState`, `resetUserState`) e o estado do SAF (`getSafState`, `setSafState`).

## Interação do Usuário

### botInteractions.js

- **Inicialização**: Quando o usuário inicia o bot, ele é apresentado com uma mensagem de boas-vindas e uma lista de SAFs para selecionar.
- **Seleção de SAF**: O usuário seleciona um SAF da lista fornecida.
- **Entrada de Dados**: O usuário é solicitado a fornecer um título e uma descrição para a prova de sucessão.
- **Envio de Foto**: O usuário envia uma foto que será processada e salva.

## Processamento de Fotos

### photoProcessor.js

- **Dependências**: `axios` para fazer requisições HTTP, `fs` para manipulação de arquivos e `path` para manipulação de caminhos de arquivos.
- **Função `processPhoto`**: Baixa a foto do Telegram, salva temporariamente no servidor, processa a imagem e a envia para o Firestore.

## Integração com Firestore

### firestore.js

- **Dependências**: `@google-cloud/firestore` e `@google-cloud/storage` para interagir com o Firestore e o Google Cloud Storage.
- **Funções de Firestore**: `saveProofToFirestore` para salvar a prova de sucessão no Firestore, `uploadImageToFirestore` para fazer upload de imagens para o Google Cloud Storage.
- **Funções de SAF**: `getSaf` e `getAllSafs` para buscar informações sobre SAFs no Firestore.

## Gerenciamento de Estado do Usuário

### userStateManager.js

- **Gerenciamento de Estado**: Mantém o estado do usuário (como o SAF selecionado, o estágio atual da interação) em memória.
- **Funções de Gerenciamento de Estado**: `getUserState`, `setUserState`, `resetUserState` para manipular o estado do usuário.

## Conclusão

Este guia fornece uma visão geral de alto nível da aplicação, destacando os principais componentes e funcionalidades. 

## TODO

Incluir exemplos de código, descrições mais detalhadas das funções e variáveis, e instruções passo a passo para configuração e uso da aplicação.


