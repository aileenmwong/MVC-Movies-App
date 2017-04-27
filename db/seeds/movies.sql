CREATE TABLE movies (
  id serial PRIMARY KEY,
  title varchar(255) NOT NULL,
  release_year integer,
  director varchar(255),
  awards varchar(255)
);

INSERT INTO movies (title, release_year, director) VALUES
  (
    'Birdman',
    2014,
    'Alejandro Gonzáles Iñárritu'
  ),
  (
    'Guardians of the Galaxy',
    2014,
    'James Gunn'
  ),
  (
    'Mad Max: Fury Road',
    2015,
    'George Miller'
  ),
  (
    'Ex Machina',
    2015,
    'Alex Garland'
  ),
  (
    'Arrival',
    2016,
    'Denis Villeneuve'
  ),
  (
    '2001: A Space Odyssey ',
    1968,
    'Stanley Kubrick'
  ),
  (
    'District 9',
    2009,
    'Neill Blomkamp'
  ),
  (
    'The Godfather',
    1972,
    'Francis Ford Coppola'
  ),
  (
    'Moonlight',
    2016,
    'Barry Jenkins'
  ),
  (
    'Rogue One',
    2016,
    'Gareth Edwards'
  ),
  (
    'The Red Shoes',
    1948,
    'Michael Powell'
  ),
  (
    'Taxi Driver',
    1976,
    'Martin Scorsese'
  ),
  (
    'The Shining',
    1980,
    'Stanley Kubrick'
  ),
  (
    'Pulp Fiction',
    1994,
    'Quentin Tarantino'
  ),
  (
    'Fargo',
    1996,
    'The Coen Brothers'
  ),
  (
    'There Will Be Blood',
    2007,
    'Paul Thomas Anderson'
  );
