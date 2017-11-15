var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var puppySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        default: "Mixed"
    },
    age: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Puppy', puppySchema);