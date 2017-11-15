const mongoose = require('mongoose')
const Schema = mongoose.Schema
const barSchema = require('./bars')

const beerSchema = new Schema({
    name: String,
    style: String,
    bars: [{type: Schema.Types.ObjectId, ref: 'Bar'} ],
    comments: String
},
{
    timestamps: true
});




module.exports = mongoose.model('Beer', beerSchema);