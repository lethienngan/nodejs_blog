const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema

//Create new object Model
const CourseSchema = new Schema(
    {
        _id: {type: Number},
        name: { type: String, default: '', required: true },
        description: { type: String, default: '' },
        image: { type: String, default: '' },
        videoId: { type: String, default: '', required: true },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        _id: false,
        timestamps: true,
    }
)


// Custom Query Helpers
CourseSchema.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const typeCheck = ['asc', 'desc'].includes(req.query.type) ? req.query.type : 'desc' //default : desc
        return this.sort({
            [req.query.column]: typeCheck
        })
    }
    else
        return this;
}


// Add plugin
mongoose.plugin(slug)
CourseSchema.plugin(AutoIncrement)
CourseSchema.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true })



module.exports = mongoose.model('Course', CourseSchema);