
module.exports = function sortMiddleware(req, res, next) {

    res.locals._sort = {
        enable: false,
        type: 'default'
    }
    if (req.query.hasOwnProperty('_sort')) {
        res.locals._sort.enable = true;
        res.locals._sort.type = ['asc', 'desc'].includes(req.query.type) ? req.query.type :'default' //check query string if exactly asc/desc/default
        res.locals._sort.column = req.query.column // column name - field name
    }
    next()
}