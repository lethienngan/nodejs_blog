const path = require('path')
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;


//Access Public file
app.use(express.static(path.join(__dirname,'public')))


// middleware monitor - HTTP logger
app.use(morgan('combined'));
//Template Engine - Rendering engine setup
// app.engine('handlebars', handlebars());
// app.set('view engine', 'handlebars');

app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.set('views', path.join(__dirname, 'resources/views'));





// route
app.get('/', function (req, res) {
    return res.render('home');
});
app.get('/news', (req,res) => {
    res.render('news');
})





app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))