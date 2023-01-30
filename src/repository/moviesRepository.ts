import prisma from "../database/db.js"
import { Movie } from "../protocols/Movie.js";

async function insertMovie(movie: Movie) {
   return await prisma.movies.create({
    data: {
    genre: movie.genre,
    name: movie.name,
    platform: movie.platform,
    description: movie.description,
    watched: movie.watched,
    entity: movie.entity,
    userid: movie.userid,
    }
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

async function deleteMovieById(id: number) {
    return prisma.movies.delete({
        where: {
            id
        }
    })
}

async function findAllMoviesById(id: number) {
    return prisma.users.findMany({
        where: {
            id: id
        },
        include: {
            movies: true
        }
    })
}

export {
    findAllMovies,
    insertMovie,
    updateMovie,
    deleteMovieById,
    findAllMoviesById
}