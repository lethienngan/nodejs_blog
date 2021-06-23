const Course = require('../models/Course.js');
const { multipleMongooseToObject } = require('../../ulti/mongoose');

class SiteController {

    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then(course => {
                res.render('home', {
                    course: multipleMongooseToObject(course),
                })
            })
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }

    //[GET] /:anything differ with /path
    notFound(req, res) {
        res.sendStatus(404);
    }
}

module.exports = new SiteController;