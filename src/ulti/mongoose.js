module.exports = {
    // Parse từ Array Document sang Object
    multipleMongooseToObject: function(mongoose) {
        return mongoose.map(mongoose => mongoose.toObject());
    },
    // Parse từ Document sang object
    mongooseToObject: function (mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
}