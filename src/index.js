// Initial
const express = require('express');
const methodOverride = require('method-override')
const app = express();
const morgan = require('morgan');
const port = 3000;
const path = require('path')
const handlebars = require('express-handlebars');
const route = require('./routes');
const dataBase = require('./config/db');
const SortMiddleware = require('./app/middleware/sortMiddleware');

// Connect to DB
dataBase.connect();
// cd Express to access Public folder - to get img & css
app.use(express.static(path.join(__dirname, '/public/')))
// Middleware monitor - HTTP logger
app.use(morgan('combined'));
// Middleware Method-override
app.use(methodOverride('_method'));
// Middleware Custom Middleware - sort
app.use(SortMiddleware)
//Template Engine - Rendering engine setup - Express Handlebars
app.engine('.hbs',
    handlebars({
        extname: '.hbs',
        helpers: require('./helpers/handlebars'),
    })
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routing init
route(app);+

// App start & Listen to port
app.listen(port, () => console.log(`App listening at http://localhost:${port}`))