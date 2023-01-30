# wishlist_Api

## Uma api para você organizar os filmes, series e jogos que gostaria de ver e poder dar e ver os feedbacks dos mesmos se já vistos pelo usuários.

### Para iniciar o projeto siga os comandos:
>1- npm i 
>/ 2- configurar o arquivo .env de acordo com os dados do seu banco de dados local.
>/ 3- npm run prisma:seed 

##### Documentaç

>get("/movies")
##### A rota que lista todos os filmes, series ou jogos.

>get("/movies/:userid")
##### A rota lista todos os filmes de acordo com o que foi criado pelo usuário e seus dados.

>post("/movies")
##### A rota para inserir novos entretenimentos na sua lista, o usuário deve mandar o seguinte objeto.
```
{
  genre: terror
	name: chuck,
	platform: netflix,
	description: "",
	watched: false,
	entity: filme,
  userid: 1
}
```

>put("/movies")
##### A rota que da atualização, onde o usuário manda o objeto com a descrição e o valor de wached: true para marcar como já assistido ou jogado.
```
{
  genre: terror
	name: chuck,
	platform: netflix,
	description: "Não recomento para quem tem problemas de coração",
	watched: true,
	entity: filme,
  userid: id
}
```

>delete("/movies/:id")
##### Rota pra deletar algum item da lista com a id do item enviado via params
