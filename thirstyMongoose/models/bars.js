const mongoose = require('mongoose')
const Schema = mongoose.Schema

const barSchema = new mongoose.Schema({
    name: String,
    beers: [mongoose.Schema.Types.ObjectId, ref: 'Beers']
});



mondule.exports = barSchema