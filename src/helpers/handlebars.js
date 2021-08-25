const Handlebars = require('Handlebars')


module.exports = {
    sum: (a, b) => a + b,
    sortable: (column, sort) => {
        //Check type of Sort by compare "column" name
        const sortType = (column === sort.column) ? sort.type : 'default'

        const iconTypes = {
            default: 'oi oi-elevator',
            asc: 'oi oi-sort-ascending',
            desc: 'oi oi-sort-descending',
        }
        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        }

        const icon = iconTypes[sortType]
        const type = types[sortType]

        const href = Handlebars.escapeExpression(`?_sort&column=${column}&type=${type}`)

        const output =  `<a href="${href}">
            <span class="${icon}"></span>
            </a>`;
        return new Handlebars.SafeString(output);
    }
};