
<style>
      body {
        background-color: white;
      }
      h1,h2,h3 {
        color: black;
      }
    </style>
<body>

![diagrama adopet](/img/adopet-logo.png)
<font color="3874ff">
<h1> Sobre </h1>
Após alguns testes com protótipos feitos pelo time de UX/UI de uma empresa, foi requisitada a primeira versão da Adopet, uma plataforma para conectar pessoas que desejam adotar animais de estimação e abrigos. A plataforma deve permitir ao usuário criar um perfil, visualizar os pets na fila de adoção. Por sua vez, os abrigos/ONGs podem criar um perfil para os pets e concretizar a adoção.</p>

<h1> Visão Geral Back-end </h1>
<h2>Schema</h2>
O schema Adopet é usado para armazenar informações sobre pets e seus tutores, bem como as mensagens enviadas para os tutores de quem tenha interesse em adotar um determinado pet. O schema é composto por três tabelas: Pets, Tutores e Mensagens.

<h2> Tabela: Pets </h2>
A tabela Pets armazena informações sobre os pets registrados no sistema. Cada registro na tabela representa um pet e inclui os seguintes campos:

-  id: um identificador exclusivo para o pet (tipo: inteiro)<br>
-  nome: o nome do pet (tipo: texto)<br>
-  idade: a idade do pet (tipo: texto)<br>
-  porte: a tamanho do pet (tipo: texto)<br>
-  personalidade: a personalidade do pet (tipo: texto)<br>
-  localizacao: aonde o pet mora atualmente (tipo: texto)<br>
-  id_tutor: o identificador do tutor do pet (tipo: inteiro)

<h2> Tabela: Tutores </h2>
A tabela Tutores armazena informações sobre os tutores registrados no sistema. Cada registro na tabela representa um tutor e inclui os seguintes campos:

- id: um identificador exclusivo para o tutor (tipo: inteiro)<br>
- nome: o nome do tutor (tipo: texto)<br>
- email: o endereço de e-mail do tutor (tipo: texto)<br>
- senha: a senha do tutor (tipo: texto)

<h2> Tabela: Mensagens </h2>
A tabela Mensagens armazena informações sobre as mensagens enviadas para os tutores/organização e um usuário que queira adotar o pet. Cada registro na tabela representa uma mensagem e inclui os seguintes campos:

- id: um identificador exclusivo para a mensagem (tipo: inteiro)<br>
- nome: o identificador do nome da pessoa que enviou a mensagem (tipo: texto)<br>
- telefone: contato de quem quer adotar o pet (tipo: texto)<br>
- nome_animal: apelido do pet que o usuario deseja adotar (tipo: texto)<br>
- mensagem: o corpo da mensagem (tipo: texto)<br>
- data_envio: a data em que a mensagem foi enviada (tipo: data)<br>
- lida: um indicador que informa se a mensagem foi lida ou não (tipo: booleano)<br>
- id_tutor: id do dono do pet (tipo: inteiro)<br>
- id_pet: id do pet que o usuario deseja adotar (tipo: inteiro)<br>
## Diagrama 
![diagrama adopet](/img/diagrama_adopet.png)

## Como baixar o projeto
- git clone https://github.com/etn-43/adopet.git
- cd adopet
- coloque as variáves de ambiente e renomeie "exemplo.env" para ".env"
- npm install
- npx sequelize-cli db:seed:all (você precisa ter um database com o nome de adopet na sua máquina)
</body>