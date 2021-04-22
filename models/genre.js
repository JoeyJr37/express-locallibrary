var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
    {
        name: { type: String, required:true, minLength: 3, maxLength: 100 },
    }
);

// Virtual for book's URL
GenreSchema
.virtual('url')
.get(function() {
    return '/catalog/book/' + this._id;
});

//export model
module.exports = mongoose.model('Genre', GenreSchema);