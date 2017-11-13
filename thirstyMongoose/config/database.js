const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/thirstyMongoose');

const database = mongoose.connection;

database.once('open', () => {
    console.log(`Connected to MnogoDB at ${database.host}:${database.port}`);
});

database.on('error', (err) => {
    console.error('Database error: \n${err}');
});