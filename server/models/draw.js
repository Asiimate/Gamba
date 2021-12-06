var mongoose = require('mongoose');

// Schema for draws
var drawSchema = mongoose.Schema({
    dailynumber: {
        type: Number,
        required: true
    },
    numbers: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

var Draw = module.exports = mongoose.model('Draw', drawSchema);

/* BASIC CRUD FUNCTIONALITIES */

// Get Draws
module.exports.getDraws = function(callback, limit){
    Draw.find(callback).limit(limit);
}

// Post Draw
module.exports.addDraw = function(draw, callback){
    Draw.create(draw, callback);
}

// Update Draw
module.exports.updateDraw = function(id, draw, options, callback){
    var query = {_id: id};
    var update = {
        dailynumber: draw.dailynumber,
        numbers: draw.numbers,
        date: draw.date
    };
    Draw.findOneAndUpdate(query, update, options, callback)
}

// Delete Draw
module.exports.deleteDraw = function(id, callback){
    var query = {_id: id};
    Draw.deleteOne(query, callback);
}

/* ADVANCED REQUESTS */