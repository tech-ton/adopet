



![diagrama adopet](/img/adopet-logo.png)

# Sobre 
Após alguns testes com protótipos feitos pelo time de UX/UI de uma empresa, foi requisitada a primeira versão da Adopet, uma plataforma para conectar pessoas que desejam adotar animais de estimação e abrigos. A plataforma deve permitir ao usuário criar um perfil, visualizar os pets na fila de adoção. Por sua vez, os abrigos/ONGs podem criar um perfil para os pets e concretizar a adoção.

# Visão Geral Back-end

## Schema
O schema Adopet é usado para armazenar informações sobre pets e seus tutores, bem como as mensagens enviadas para os tutores de quem tenha interesse em adotar um determinado pet. O schema é composto por três tabelas: Pets, Tutores, Abrigos e Adocoes.

## Tabela: Pets
A tabela Pets armazena informações sobre os pets registrados no sistema. Cada registro na tabela representa um pet e inclui os seguintes campos:

-  id: um identificador exclusivo para o pet (tipo: inteiro)<br>
-  nome: o nome do pet (tipo: texto)<br>
-  idade: a idade do pet (tipo: texto)<br>
-  descricao: a descrição do pet (tipo: texto)<br>
- adotado: referencia se o pet foi adotado ou não (tipo: bool) </br> 
-  endereco: aonde o pet mora atualmente (tipo: texto)<br>
-  foto: foto do pet (tipo: texto)<br>
-  id_abrigo: o identificador do tutor do pet (tipo: inteiro)

## Tabela: Tutores
A tabela Tutores armazena informações sobre os tutores registrados no sistema. Cada registro na tabela representa um tutor e inclui os seguintes campos:

- id: um identificador exclusivo para o tutor (tipo: inteiro)<br>
- nome: o nome do tutor (tipo: texto)<br>
- email: o endereço de e-mail do tutor (tipo: texto)<br>
- senha: a senha do tutor (tipo: texto)
- cidade: a cidade do tutor (tipo: texto)<br>
- telefone: o telefone do tutor (tipo: texto)<br>
- sobre: descrição do tutor (tipo: texto)<br>
- foto: foto do tutor (tipo: texto)<br>

## Tabela: Abrigo 
A tabela Abrigo armazena informações sobre o abrigo onde o pet está. Cada registro na tabela inclui os seguintes campos:

- id: um identificador exclusivo para o abrigo (tipo: inteiro)<br>
- nome: o nome da ong (tipo: texto)<br>
- id_tutor: id do responsavel pelo abrigo (tipo: inteiro)<br>

## Tabela: Adocoes 
A tabela Adocoes armazena informações sobre o pet que foi adotado por um tutor. Cada registro na tabela inclui os seguintes campos:

- id: um identificador exclusivo para a adoção (tipo: inteiro)<br>
- data: a data em que o pet foi adotado (tipo: data)<br>
- id_tutor: id de quem adotou o pet (tipo: inteiro)<br>
- id_pet: id do pet que o tutor adotou (tipo: inteiro)<br>

## Diagrama Relacional
![diagrama adopet](/img/diagrama.png)



## Como baixar o projeto
- git clone https://github.com/etn-43/adopet.git
- cd adopet
- coloque as variáves de ambiente e renomeie "exemplo.env" para ".env"
- npm install
- npx sequelize-cli db:seed:all (você precisa ter um database com o nome de adopet na sua máquina)

### Desenvolvido por: Elivelton Correa Firmino