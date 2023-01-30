import prisma from "../src/database/db.js";

async function main() {
    await prisma.users.create({
        data: {"email": "teste@teste.com", "password": "teste"}
    })

    await prisma.movies.createMany({
        data: [
            {     
            "genre": "terror",
            "name": "sexta-feira 13",
            "platform": "netflix",
            "description": "não recomendo para pessoas com problemas cardíacos",
            "watched": true,
            "entity": "filme",
            "userid": 1
            },
            { 
            "genre": "comédia",
            "name": "tiras da pesada",
            "platform": "globo-play",
            "description": "",
            "watched": false,
            "entity": "filme",
            "userid": 1
            },
            {
            "genre": "suspênse",
            "name": "a ilha do medo",
            "platform": "amazon prime",
            "description": "",
            "watched": false,
            "entity": "filme",
            "userid": 1
            }
        ]
    })
}

main()
    .then(() => {
        console.log("registo no banco feito com sucesso!");
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })