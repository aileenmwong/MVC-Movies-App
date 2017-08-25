/* import your dependencies (install them first)*/
/* what packages do you need to set up your server? */

// require Express
const express = require('express');

//name variable app as express
const app = express();

//require middleware body parser
const bodyParser = require('body-parser');

const path = require('path')

const methodOverride = require('method-override')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(methodOverride('_method'));

//where to look for view templates
app.set('views', path.join(__dirname, 'views'));
//what is our templating engine
app.set('view engine', 'ejs')


// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index'));
//   })
app.get('/', (req, res) => {
  res.render('index', {
    logoName: 'Our Movie Site',
  })
})

const movieRoutes = require('./routes/movie-routes');
app.use('/movies', movieRoutes);


const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
})

