import prisma from "../database/db.js"
import { Movie } from "../protocols/Movie.js";
import { QueryResult } from "pg";

async function insertMovie(movie: Movie) {
   return await prisma.movies.create({
    data: movie
   })
}

async function updateMovie(movie: Movie) {
    return await prisma.movies.update({
        where: {
            name: movie.name,
        },
        data: movie
    })
}

async function findAllMovies() {
    return await prisma.movies.findMany();
}

async function findMovieByGenre(genre: string) {
    return prisma.movies.findFirst({
        where: {
            genre
        }
    })
}

async function deleteMovieById(id: number) {
    return prisma.movies.delete({
        where: {
            id
        }
    })
}

export {
    findAllMovies,
    insertMovie,
    updateMovie,
    findMovieByGenre,
    deleteMovieById
}