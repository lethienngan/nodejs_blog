const Course = require('../models/Course');
const { mongooseToObject } = require('../../ulti/mongoose');

class CoursesController {
    //[GET] /courses.:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('./courses/show', {
                    course: mongooseToObject(course),
                })
            })
            .catch(next);

    }
}

module.exports = new CoursesController;