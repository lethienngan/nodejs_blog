//Call Library
const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3000;
const path = require('path')
const handlebars = require('express-handlebars');
const route = require('./routes');


//Access Public file
app.use(express.static(path.join(__dirname, 'public')))

// middleware monitor - HTTP logger
app.use(morgan('combined'));
//Template Engine - Rendering engine setup
app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routing init
route(app);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))