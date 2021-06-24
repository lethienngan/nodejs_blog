const Course = require('../models/Course');
const { mongooseToObject } = require('../../ulti/mongoose');
const { multipleMongooseToObject } = require('../../ulti/mongoose');

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
    // [GET] /courses/create
    create(req, res, next) {
        res.render('./courses/create')
    }
    // [POST] /courses/store
    store(req, res, next) {
        //parse req.body to object model - formData  
        const formData = new Course(req.body);

        //save() to DB & redirect to home page
        formData.save()
            .then(() => res.redirect('/'))
            .catch(err => {
                console.log(err);
            })
       
    }
}

module.exports = new CoursesController;