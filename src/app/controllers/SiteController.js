const Course = require('../models/Course.js');


class SiteController {
    
    // [GET] /
    index(req, res) {
        Course.find({}, function(err, course) {
            if(!err){
                res.json(course);
            } else{
                res.status(500).json({ error: 'message' })
            }
        })
    }

    //[GET] /search
    search(req, res){
        res.render('search');
    }

    //[GET] /:anything differ with /path
    notFound(req, res){
        res.sendStatus(404);
    }
}

module.exports = new SiteController;