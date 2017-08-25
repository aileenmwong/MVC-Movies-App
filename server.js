/* import your dependencies (install them first)*/
/* what packages do you need to set up your server? */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/', function(req,res){
  res.send('Hello World! This is our movie site!')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const movieRoutes = require('./routes/movie-routes');
app.use('/movies', movieRoutes);


const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
})

