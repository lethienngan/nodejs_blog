const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema

//Create new object Model
const Course = new Schema(
    {
        name: { type: String, default: '', required: true },
        description: { type: String, default: '' },
        image: { type: String, default: '' },
        videoId: { type: String, default: '', required: true },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    }
)

// Add plugin
mongoose.plugin(slug)
Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true })



module.exports = mongoose.model('Course', Course);