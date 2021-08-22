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
const SortMiddleware = require('./app/middleware/sortMiddleware_course');

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
app.engine('.hbs', handlebars({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
        sortable: (column, sort) => {
            //Check type of Sort by compare "column" name
            const sortType = (column === sort.column) ? sort.type : 'default'

            const iconTypes = {
                default: 'oi oi-elevator',
                asc: 'oi oi-sort-ascending',
                desc: 'oi oi-sort-descending',
            }
            const types = {
                default: 'desc',
                asc: 'desc',
                desc: 'asc',
            }

            const icon = iconTypes[sortType]
            const type = types[sortType]

            return `<a href="?_sort&column=${column}&type=${type}">
            <span class="${icon}"></span>
            </a>`;
        }
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