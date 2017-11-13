vconst mongoose = require('mongoose')
const Schema = mongoose.Schema
const Bar = require('./bars')

var beeerSchema = new mongoose.Schema({
    name: String,
    bars: [mongoose.Schema.Types.ObjectsID, ref: 'Bars']
});




module.exports = mongoose.model('Beers', beerSchema)