# LAB: make an MVC movies express app.

1. You should already have an `intro_movies_db` from a previous day's homework. If you don't, navigate to the `db/seeds` directory and run `psql -f seed.sql`. This will re-seed the database. We didn't create a migration file, we're doing that in the seed file instead.

2. This is a challenging lab. It's okay if you get lost (as us or a neighbor), you'll have the solution later today to go back to when you want to refresh.

3. We've provided the basic views. The first step is to run `npm install`.

4. Next, you'll have to get the `app.js` file fleshed out. Refer to today's lecture. **It's very important to keep track of what you're naming the files and where you put them. Then what you `export` things as and what you `require` them as, i.e. making sure the names match up. That's one goal of this lab, to get practice with exporting and requiring. It's fine if you don't get the app working. This is your first attempt!

**warning, for the following steps you'll need to create the directories (routes, models, controllers) and the files (for the routes, controller, and model), refer to the quotes app!**

5. Next, get the basic routes down for viewing all movies. Then try to get the controller part of that puzzle in place, and finally flesh out the model. Try to get to the point such that when you navigate to `/movies`, it displays all movies.

6. Then, try to get the route, controller, and model worked out for viewing a single movie.

**BONUS**

7. Work out the route, controller, and model for adding a movie.

8. If you get here, good job! Now you can do some styling, some hacking, whatever you'd like to try.

**this lab is tough, refer often to how we did things with the quotes app; type everything out, and be careful of what you're naming things so that you refer to the right names later on**
