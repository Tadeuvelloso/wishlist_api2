import { Request, Response } from "express";
import {findAllMovies, insertMovie, updateMovie, deleteMovieById, findAllMoviesById} from "../repository/moviesRepository.js"
import { Movie } from "../protocols/Movie.js";

export async function getAllMovies (req: Request, res: Response){
    try {
        const allMovies = await findAllMovies();
        res.send(allMovies);
    } catch(error){
        return res.status(500).send(error.message)
    }
}

export async function insertNewMovie (req: Request, res: Response) {
    const newMovie = res.locals.newMovie as Movie;
    try {
        await insertMovie(newMovie);
        res.status(201).send(`Filme adicionado com sucesso!`);
    } catch(error){
        return res.status(500).send(error.message)
    }
}

export async function updateStatusMovie (req: Request, res: Response) {
    const newStatusMovie = res.locals.newMovie as Movie;
    try {
        await updateMovie(newStatusMovie);
        res.status(201).send(`"Filme atualizado com sucesso!`);
    } catch(error){
        return res.status(500).send(error.message)
    }
}


export async function deleteMovie (req: Request, res: Response) {
    const { id } = req.params;

    try {
        await deleteMovieById(Number(id));
        res.status(201).send(`Filme excluido com sucesso!`);
    } catch(error){
        return res.status(500).send(error.message)
    }
}

export async function getMovieByUserid (req: Request, res: Response) {
    const { id } = req.params;

    try {
        const allUserMovies = await findAllMoviesById(Number(id));
        res.send(allUserMovies);
    } catch(error){
        return res.status(500).send(error.message)
    }
}