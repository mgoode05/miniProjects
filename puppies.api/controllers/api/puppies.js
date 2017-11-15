var Puppy = require('../../models/puppy');

function getAllPuppies(req, res) {
    Puppy.find({}, function(err, puppies) {
        res.status(200).json(puppies);
    });
}


function getOnePuppy(req, res) {
    Puppy.findById(req.params.id, function(err, pup) {
        res.status(200).json(pup);
    });
}

function createPuppy(req, res) {
    Puppy.create(req, body, function(err, pup) {
        res.status(201).json(pup);
    });
}

function updatePuppy(req, res) {
    Puppy.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, pup) {
        res.status(200).json(pup);
    })
}

function deletePuppy(req, res) {
    Puppy.findByIdAndRemove(req.params.id, function(err, pup) {
        res.status(200).json(pup);
    });
}


 module.exports = {
     getAllPuppies,
     getOnePuppy,
     createPuppy,
     updatePuppy,
     deletePuppy
 }