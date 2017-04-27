DROP DATABASE IF EXISTS intro_movies_db;
CREATE DATABASE intro_movies_db;
\connect intro_movies_db;
\i movies.sql;
