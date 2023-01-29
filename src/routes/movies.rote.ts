import { Router } from "express";
import { checkMovieObj } from "../middlewares/movieMiddleware.js";
import {getAllMovies, insertNewMovie, updateStatusMovie, getMovieByGenre, deleteMovie } from "../controllers/moviesController.js";

const router = Router();

router.post("/movies", checkMovieObj, insertNewMovie);
router.put("/movies", checkMovieObj, updateStatusMovie);
router.get("/movies", getAllMovies);
router.get("/movies/:genre", getMovieByGenre);
router.delete("/movies/:id", deleteMovie);


export default router;