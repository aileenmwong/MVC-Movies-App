const db = require('../db/config');

const Movie = {};

Movie.findAll = () => {
  return db.query('SELECT * FROM movies');
}

Movie.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM movies
    WHERE id = $1
    `, [id]);
}

Movie.create = movies => {
  return db.one(
    `
    INSERT INTO movies
    (title, release_year, director)
    VALUES ($1, $2, $3)
    RETURNING *
    `,
    [movies.title, movies.release_year, movies.director]
    );
};

Movie.update = (movie, id) => {
  return db.one(`
    UPDATE movies SET
    title = $1,
    release_year = $2,
    director = $3
    WHERE id = $4
    RETURNING *
    `, [movie.title, movie.release_year, movie.director, id]);
}

Movie.delete = (id) => {
  return db.none(`
    DELETE FROM movies
    WHERE id = $1
    `, [id]);
}







module.exports = Movie;
