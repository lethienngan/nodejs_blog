const newsRouter = require('./news.js')
const siteRouter = require('./site.js')


function route(app) {

    app.use('/news', newsRouter);

    app.use('/', siteRouter); 
}


module.exports = route;