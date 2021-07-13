const Course = require('../models/Course.js');
const { multipleMongooseToObject } = require('../../ulti/mongoose');

class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then(course => {
                res.render('./me/stored-courses', {
                    course: multipleMongooseToObject(course),
                })
            })
            .catch(next);
    }

    //[GET] /me/trash/courses/
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(course => {
                res.render('./me/trash-courses', {
                    course: multipleMongooseToObject(course),
                })
            })
            .catch(next);
    }
}

module.exports = new MeController;