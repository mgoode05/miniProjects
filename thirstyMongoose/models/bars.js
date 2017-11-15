const mongoose = require('mongoose')
const Schema = mongoose.Schema
const beerSchema = require('./bars')

const barSchema = new Schema({
    name: String,
    location: String,
    beers: [ beerSchema ]
});



module.exports = mongoose.model('bars', barSchema);