const Course = require('../models/Course.js');
const { multipleMongooseToObject } = require('../../ulti/mongoose');

class MeController {
    //[GET] 
    storedCourses(req, res, next) {
        Course.find({})
            .then(course => {
                res.render('./me/stored-courses', {
                    course: multipleMongooseToObject(course),
                })
            })
            .catch(next);
    }
}

module.exports = new MeController;