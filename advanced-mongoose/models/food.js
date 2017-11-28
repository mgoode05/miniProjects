var mongoose = require('mongoose');

var foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    group: {
        type: String,
        required: true,
        enum: ['Veg', 'Diary', 'Meat', 'Bread']
    },
    shelfLife: {
        type: Number,
        required: true
    }
});

foodSchema.virtual('description').get(function() {
    return `${this.name} (${this.group}) - Good for ${this.shelfLife} days`;
});

foodSchema.set('toJSON', {
    virtuals: true,
    transform: function(doc, ret, options) {
        //add a password property
        ret.password = 'I am a password';
        //remove a property like password
        delete ret.password;
        return ret;
    }
});


module.exports = mongoose.model('Food', foodSchema);
