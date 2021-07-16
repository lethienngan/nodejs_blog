const Course = require('../models/Course.js');
const { multipleMongooseToObject } = require('../../ulti/mongoose');

class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {

        Promise.all([Course.countDocumentsDeleted(), Course.find({})])
            .then(([deletedCount, courses]) => {
                res.render('./me/stored-courses', {
                    deletedCount,
                    course: multipleMongooseToObject(courses),
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