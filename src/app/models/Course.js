const mongoose = require('mongoose')
const Scheme = mongoose.Schema

const Course = new Scheme({
    name: { type: String, default: '', maxlength: 255 },
    description: { type: String, default: '', maxlength: 255600 },
    image: { type: String, default: '', maxlength: 255 },
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now},
})

module.exports = mongoose.model('Course', Course);