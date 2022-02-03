const express = require("express");
const app = express();
const pool = require("./db");

app.use(express.json());
app.get("/Mcollection", async(req, res) => {
    try {
        const allMovie = await pool.query("SELECT * FROM movies"); //http://localhost:5500/url/todo    //get funtion
        res.json(allMovie.rows);
        console.log("Get is working All Movies are displayed");
    } catch (err) {
        console.error(err.message);
    }
});

app.post("/Mcollection", async(req, res) => {
    try {
        const { movies_rank, movies_name, movies_genres } = req.body; //http://localhost:5500/url/todo  // post to insert new data

        const newmovies = await pool.query(
            "INSERT INTO movies (movies_rank, movies_name, movies_genres) VALUES ($1) RETURNING *", [movies_rank, movies_name, movies_genres]
        );
        res.json(newmovies);
        console.log("inserting data is working");
    } catch (err) {
        console.error(err.message);
    }
});
app.listen(5100, () => {
    console.log("Listening on Port 5100");
});