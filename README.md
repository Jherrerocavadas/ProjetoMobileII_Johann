<div align="center">

![ProjetoMobileIIAPI](README_Files/icon.png)

</div>
<h1 align = "center">ProjetoMobileII API </h1>



# Sobre
Aplicativo Mobile ProjetoMobileII - Sistema CRUD de Projeto Mobile II para o curso de Design de Mídias Digitais da Fatec Carapicuíba.

Esse projeto é um aplicativo CRUD de prestadores de serviços para fatecs. Entre suas funções estão:

(Tabela Usuários)
- Cadastro de Usuários.
- Alteração do cadastro de Usuários.
- Busca de Usuários.
- Exclusão do cadastro de Usuários.
- Listagem de Usuários.

(Tabela Fatecs)
- Cadastro de Fatecs.
- Alteração do cadastro de Fatecs.
- Busca de Fatecs.
- Exclusão do cadastro de Fatecs.
- Listagem de Fatecs.
  
(Tabela Prestadores)
- Cadastro de Prestadores.
- Alteração do cadastro de Prestadores.
- Busca de Prestadores.
- Exclusão do cadastro de Prestadores.
- Listagem de Prestadores.

(Tabela Prestadores_Fatecs)
- Cadastro de Prestadores_Fatecs.
- Alteração do cadastro de Prestadores_Fatecs.
- Busca de Prestadores_Fatecs.
- Exclusão do cadastro de Prestadores_Fatecs.
- Listagem de Prestadores_Fatecs.

Observação: Nem todos os recursos podem estar implementados e/ou funcionando corretamente. Para verificar quais são as funcionalidades implementadas consulte a guia "[Funcionalidades](#Funcionalidades)", mais abaixo.

# Índice

- [Sobre](#sobre)
- [Índice](#índice)
- [Funcionalidades](#funcionalidades)
    - [Tabela de Usuários](#tabela-de-usuários)
    - [Tabela de Fatecs](#tabela-de-fatecs)
    - [Tabela de Prestadores](#tabela-de-prestadores)
    - [Tabela de Prestadores\_Fatecs](#tabela-de-prestadores_fatecs)
- [Pré Requisitos](#pré-requisitos)
      - [Hardware](#hardware)
      - [Software](#software)
- [Tecnologias](#tecnologias)
- [Instruções para uso do expo](#instruções-para-uso-do-expo)
- [Autor](#autor)
    - [Johann Herrero Cavadas](#johann-herrero-cavadas)


# Funcionalidades

(OTIMIZAR COMPONENTES FUTURAMENTE)
### Tabela de Usuários
- [x] Cadastro de Usuários.
- [x] Alteração do cadastro de Usuários.
- [x] Busca de Usuários.
- [x] Exclusão do cadastro de Usuários.
- [x] Listagem de Usuários.

### Tabela de Fatecs
- [ ] Cadastro de Fatecs.
- [ ] Alteração do cadastro de Fatecs.
- [ ] Busca de Fatecs.
- [ ] Exclusão do cadastro de Fatecs.
- [ ] Listagem de Fatecs.

### Tabela de Prestadores
- [ ] Cadastro de Prestadores.
- [ ] Alteração do cadastro de Prestadores.
- [ ] Busca de Prestadores.
- [ ] Exclusão do cadastro de Prestadores.
- [ ] Listagem de Prestadores.

### Tabela de Prestadores_Fatecs
(Relação entre as tabelas Prestador e Fatec)
- [ ] Cadastro de Prestadores_Fatecs.
- [ ] Alteração do cadastro de Prestadores_Fatecs.
- [ ] Busca de Prestadores_Fatecs.
- [ ] Exclusão do cadastro de Prestadores_Fatecs.
- [ ] Listagem de Prestadores_Fatecs.


# Pré Requisitos

  #### Hardware
  - Um celular com o Expo client instalado (Ou um emulador no computador)

  #### Software
  - Node.js
  - Expo CLI
  - Biblioteca yarn (opcional, para gerenciar as dependências)
  - Biblioteca react-navigation (para realizar a navegação entre as telas do aplicativo)
  - Biblioteca axios (para realizar as requisições à API (que manipula com o banco de dados))


# Tecnologias
- [Node.js](https://nodejs.org/pt-br/)
- [React-Native](https://reactnative.dev)
- [Expo](https://expo.dev)

# Instruções para uso do expo
  Para iniciar o aplicativo em modo de desenvolvimento (uso no expo), é necessário abrir ir na pasta raiz do aplicativo e executar:
  - expo start (caso seu computador esteja na mesma rede que o seu celular para testes, ou caso você esteja usando algum emulador)
  - yarn local/npm run local (caso você esteja usando um celular de testes Android conectado via cabo ao computador)
  - yarn localios/npm run localios (caso você esteja usando um celular de testes IOS conectado via cabo ao computador)

  Depois, é necessário escanear o QR code gerado no terminal pelo expo client (opção Scan QR code), inserir a url do servidor do aplicativo manualmente (Enter URL manually), ou, caso tenha realizado o login no Expo CLI (usando o comando expo login e inserindo seu login e senha) e no Expo client, clicar no ícone do servidor aberto (Acima das opções de "Scan QR code" e "Enter URL manually").


# Autor
### Johann Herrero Cavadas
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jherrerocavadas/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jherrerocavadas@gmail.com?Subject=Contato%20github%20-%20Repositório%20ProjetoMobileII)
[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Jherrerocavadas)

