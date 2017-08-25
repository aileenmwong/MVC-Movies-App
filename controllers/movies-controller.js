const Movie = require('../models/movies');

const moviesController = {};

moviesController.index = (req, res) => {
  Movie.findAll()
  .then(movies => {
    res.render('movies/movies-index', {
      message: 'ok',
      data: movies,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

moviesController.show = (req, res) => {
  Movie.findById(req.params.id)
  .then(movies => {
    res.render('movies/movies-single', {
      message: 'ok',
      data: movies,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

moviesController.create = (req, res) => {
  Movie.create({
    title: req.body.title,
    release_year: req.body.release_year,
    director: req.body.director,
  })
  .then(() => {
    res.redirect('/movies');
  }).catch(err => {
    res.status(500).json(err);
  });
};

moviesController.update = (req, res) => {
  Movie.update({
    title: req.body.title,
    release_year: req.body.release_year,
    director: req.body.director,
  }, req.params.id).then(movie => {
    res.json({
      message: 'Movie updated successfully!',
      data: movie,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

moviesController.delete = (req, res) => {
  Movie.delete(req.params.id)
  .then(() => {
    res.redirect('/movies');
    }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}


module.exports = moviesController;
