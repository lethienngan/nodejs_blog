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
        const formData_NEW = new Course(req.body);

        //save() to DB & redirect to home page
        formData_NEW.save()
            .then(() => res.redirect('/'))
            .catch(err => {
                console.log(err);
            })

    }
    // [GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('./courses/edit', { course: mongooseToObject(course) }))
            .catch(next);

    }
    // [PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //[DELETE] /courses/:id/
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CoursesController;