-- connect to the database

-- what tables should be created?
-- check out the seed.sql  and movies.sql files ;)
--  what fields/columns is your table expected to have?
\connect movies_db_dev

CREATE TABLE IF NOT EXISTS movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  release_year INT,
  director VARCHAR(255)
);
