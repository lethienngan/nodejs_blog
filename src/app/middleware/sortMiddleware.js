
module.exports = function sortMiddleware(req, res, next) {

    res.locals._sort = {
        enable: false,
        type: 'default'
    }
    if (req.query.hasOwnProperty('_sort')) {
        res.locals._sort.enable = true;
        res.locals._sort.type = req.query.type //asc or desc
        res.locals._sort.column = req.query.column // column name - field name
    }
    next()
}