const Bars = require('./../models/bars')

module.exports = {
    index,
    show,
    create,
    newBar
}

function index(req, res) {
    Bar.find({}, (err, doc) => {
        res.render('./bars/index', {bars: doc})
    })
}

function show(req, res) {
    Bar.findById(req.params.id, (err, doc) => {
        res.render('./bars/show', { bar: doc})
    })
}

function create(req,res) {
    var newBar = new Bar(req.body)
    
    if (newBar.save()) {
        res.redirect("/bars")
    } else {
        res.render('./bars/new')
    }
}

function newBar(req, res) {
    res.render('./bars/new')
}