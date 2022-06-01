# biblioteca-de-jogos

## Escopo

#### Objetivo:

Ser um local centralizado para compra, venda e gerenciamento de jogos. Permitindo que tanto empresas de jogos quanto jogadores tenham uma plataforma em comum para atuarem no mercado de jogos.

#### Principais Features:
- CRUD de usuários e login
- CRUD de empresas de jogos
- CRUD e publicação de jogos
- Biblioteca de jogos comprados
- Loja e compra de jogos publicados 
- Download dos arquivos dos jogos

#### Tecnologias:
- Angular js
- Node com Express js
- MySQL

## Equipe

- Geovanna Menegasse Silva (full stack)
- Rodrigo Ferreira Araujo (back end)
- Vitor Lucio dos Santos Ferreira (full stack)

## Projeto de MVP

- Mágico de Oz: em um contexto que os consoles de videogames dominam a indústria dos jogos, a vantagem de construir um canal de comunicação entre publicadoras de jogos e usuários de PC é clara. 
- Nesse sentido, nosso MVP consiste em um protótipo de aplicação, que, por fachada, jogadores entram para acessar seus jogos comprados ou comprar jogos novos com uma ferramenta de busca, que os leva para um catálogo de jogos e publicadoras. 
- Contudo, a comunicação necessária desde a requisição de compra de um jogo até o fornecimento do arquivo executável dele será feita manualmente pelos admnistradores do projeto, que entrarão em contato com a publicadora e processarão o pagamento e a entrega do executável do videogame.
- A proposta futura de nosso produto seria a independência de usuários comprando jogos e publicadoras/desenvolvedoras publicando jogos para serem vendidos na aplicação.

## Backlog do Produto

1. Como administrador quero publicar jogos de empresas para que os usuários possam encontrá-lo na loja
2. Como administrador quero ter acesso a uma biblioteca com todos os jogos publicados para gerenciá-los
3. Como empresa quero poder me cadastrar no sistema para criar uma conta
4. Como empresa quero poder gerenciar a minha conta para visualizar e editar meus dados
5. Como empresa quero publicar meus jogos para que os usuários possam encontrá-lo na loja
6. Como empresa quero ter acesso a minha biblioteca de jogos publicados para gerenciá-los
7. Como usuário quero poder me cadastrar no sistema para criar uma conta e fazer login
8. Como usuário quero poder gerenciar a minha conta para visualizar e editar meus dados
9. Como usuário quero ter acesso a minha biblioteca de jogos comprados para fazer download
10. Como usuário quero ter acesso a loja de jogos para escolher jogos para comprar
11. Como usuário quero pesquisar por um jogo pelo nome, empresa ou categoria para visualizá-lo na loja

## Backlog da Sprint

1. Como administrador quero publicar jogos de empresas para que os usuários possam encontrá-lo na loja
2. Como administrador quero ter acesso a uma biblioteca com todos os jogos publicados para gerenciá-los
7. Como usuário quero poder me cadastrar no sistema para criar uma conta e fazer login
8. Como usuário quero poder gerenciar a minha conta para visualizar e editar meus dados
9. Como usuário quero ter acesso a minha biblioteca de jogos comprados para fazer download
10. Como usuário quero ter acesso a loja de jogos para escolher jogos para comprar

## Tarefas da Sprint

|Tarefas                                           |Membro    |User Story   |Estado          |
|------------------------------------------------- |----------|-------------|----------------|
| Formulário de cadastro de usuário      (front)   |Geovanna  |     07      |  Concluído     |
| Formulário de cadastro de usuário       (back)   |Vitor     |     07      |  Concluído     |
| Modelo de usuário                       (back)   |Vitor     |     07      |  Concluído     |
| Formulário de login e logout           (front)   |Geovanna  |     07      |  Concluído     |
| Formulário de login e logout            (back)   |Vitor     |     07      |  Concluído     |
| Formulário de publicação de jogos      (front)   |Geovanna  |     01      |  Concluído     |
| Formulário de publicação de jogos       (back)   |Rodrigo   |     01      |  Concluído     |
| Modelo de jogo                          (back)   |Vitor     |     01      |  Concluído     |
| Tela de biblioteca de jogos visão adm  (front)   |Geovanna  |     02      |  Concluído     |
| Tela de biblioteca de jogos visão user (front)   |Geovanna  |     09      |  Concluído     |
| Tela de biblioteca de jogos             (back)   |Vitor     |     09      |  Em andamento  |
| Modelo de biblioteca                    (back)   |Vitor     |     09      |  Concluído     |
| Tela da loja de jogos                  (front)   |Geovanna  |     10      |  Concluído     |
| Tela da loja de jogos                   (back)   |Rodrigo   |     10      |  Em aprovação  |
| Modal para comprar o jogo              (front)   |Geovanna  |     10      |  Em andamento  |
| Modal para comprar o jogo               (back)   |Vitor     |     10      |  Em andamento  |

## Rodando o projeto

### Api

As instruções aqui são especificamente para a pasta ``/api`` do projeto.

#### Instalando dependências

- Rode o comando ``npm install`` para instalar as dependências do projeto.

#### Rodando a api

- Será necessário criar um ``.env`` igual o mostrado abaixo, mas com os valores preenchidos.

```
PORT=<PORT_QUE_A_API_VAI_USAR>
DB_NAME=<NOME_DO_BANCO_DE_DADOS>
DB_USER=<NOME_DO_USUARIO_QUE_VAI_ACESSAR_O_BANCO_DE_DADOS>
DB_HOST=localhost
DB_PASSWORD=<SENHA_DO_USUARIO_QUE_VAI_ACESSAR_O_BANCO_DE_DADOS>
JWT_SECRET=<STRING_QUALQUER_PARA_SER_O_SEGREDO_DO_JWT>
```

- Rode o comando ``npm run build`` para compilar o typeScript nos arquivos javaScript correspondentes.
- Rode o comando ``npm run dev`` para rodar a api em um ambiente de desenvolvimento.

### Front-end

As instruções aqui são especificamente para a pasta ``/front-end`` do projeto.

#### Instalando dependências

- Instale o angular CLI com o comando ``npm install -g @angular/cli``.
- Rode o comando ``npm install`` para instalar as demais dependências do projeto.

#### Rodando o front-end

- Rode o comando ``ng serve``.
