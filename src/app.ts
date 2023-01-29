import express from "express";
import movieroute from "./routes/movies.rote.js";

const server = express();

server.use(express.json());
server.use(movieroute);

server.get("/vida", (req, res) => {
    res.send("alou")
})

server.listen(5000, () => {
    console.log("executando....")
})