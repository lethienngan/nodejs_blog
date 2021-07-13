// init framework - library
const express = require('express');
const methodOverride = require('method-override')
const app = express();
const morgan = require('morgan');
const port = 3000;
const path = require('path')
const handlebars = require('express-handlebars');
const route = require('./routes');
const dataBase = require('./config/db');

// Connect to DB
dataBase.connect();
// cd Express to Public folder - to get img & css
app.use(express.static(path.join(__dirname, '/public/')))

// Midleware monitor - HTTP logger
app.use(morgan('combined'));
// Middleware Method-override
app.use(methodOverride('_method'));
//Template Engine - Rendering engine setup - Express Handlebars
app.engine('.hbs', handlebars({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b
    }
})
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// routing init
route(app);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))