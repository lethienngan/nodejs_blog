
class SiteController {
    
    // [GET] /
    index(req, res) {
        res.render('home')
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