const Bars = require('./../models/beers')

module.exports = {
    destroy,
    create
}

function destroy(req, res) {
    Bar.findById(req.params.id, (err, doc) => {
        doc.post.id(req.params.beer_id).remove()
        doc.save()
        res.redirect('/bars')
    })
}
function create(req, res) {
    Bar.findById(req.body.id, (err, doc) => {
        doc.beers.push({
            names: req.body.name,
            bars: req.body.bar_id,
            comments
        })
        doc.save((err, doc) => {
            if (err) {
                res.redner('./bars')
            }
        })
    })
}