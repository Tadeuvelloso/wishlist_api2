import prisma from "../src/database/db.js";

async function main() {
    await prisma.movies.createMany({
        data: [
            {     
            "genre": "terror",
            "name": "sexta-feira 13",
            "platform": "netflix",
            "description": "não recomendo para pessoas com problemas cardíacos",
            "watched": true,
            "entity": "filme"
            },
            { 
            "genre": "comédia",
            "name": "tiras da pesada",
            "platform": "globo-play",
            "description": "",
            "watched": false,
            "entity": "filme"
            },
            {
            "genre": "suspênse",
            "name": "a ilha do medo",
            "platform": "amazon prime",
            "description": "",
            "watched": false,
            "entity": "filme"
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