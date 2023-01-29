import { movieSchema } from '../schemas/movieSchemas.js';
import { Request, Response, NextFunction } from "express";
import { Movie } from '../protocols/Movie.js';

export function checkMovieObj (req: Request, res: Response, next: NextFunction) {
    const newMovie = req.body as Movie;


    if (!newMovie) {
        return res.sendStatus(400);
    }

    const { error } = movieSchema.validate(newMovie, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    res.locals.newMovie = newMovie;
    next();
}