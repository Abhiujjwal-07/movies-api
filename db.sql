-- Create a new database called 'DatabaseName'
CREATE DATABASE moviescollection

CREATE TABLE movies(
    movies_id SERIAL PRIMARY KEY,
    movies_rank SERIAL,
    movies_name VARCHAR(30),
    movies_genres VARCHAR(30)

);