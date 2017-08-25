const moviesController = require('../controllers/movies-controller');
const express = require('express');
const movieRoutes = express.Router();
// const movies = require('../db/movies');

movieRoutes.get('/', moviesController.index);

movieRoutes.post('/', moviesController.create);

movieRoutes.put('/:id', moviesController.update);
movieRoutes.get('/:id', moviesController.show);
movieRoutes.delete('/:id', moviesController.delete);

module.exports = movieRoutes;
