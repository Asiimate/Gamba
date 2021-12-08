var mongoose = require('mongoose');

// Schema for tips
var tipSchema = mongoose.Schema({
    
    username: {
        type: String,
        required: true
    },
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
    },
    winningclass: {
        type: String,
        default: "Not drawn yet"
    },
    winningnumbers: {
        type: Array,
    },
    winningdaily: {
        type: Number,
    }
});

var Tip = module.exports = mongoose.model('Tip', tipSchema);

/* BASIC CRUD FUNCTIONALITIES */

// Get Tips
module.exports.getTips = function(callback, limit){
    Tip.find(callback).limit(limit);
}

// Post Tip
module.exports.addTip = function(tip, callback){
    Tip.create(tip, callback);
}

// Update Tip
module.exports.updateTip = function(id, tip, options, callback){
    var query = {_id: id};
    var update = {
        username: tip.username,
        dailynumber: tip.dailynumber,
        winningclass: tip.winningclass,
        numbers: tip.numbers,
        winningnumbers: tip.winningnumbers,
        winningdaily: tip.winningdaily
    };
    Tip.findOneAndUpdate(query, update, options, callback);
}

// Delete Tip
module.exports.deleteTip = function(id, callback){
    var query = {_id: id};
    Tip.deleteOne(query, callback);
}

/* ADVANCED REQUESTS */

// Get Tips by username
module.exports.getTipsByUsername = function(username, callback, limit){
    Tip.find({'username' : username}, callback).limit(limit);
}

// Get undrawn tips
module.exports.getUndrawnTips = function(callback, limit){
    Tip.find({'winningclass' : 'Not drawn yet'}, callback).limit(limit);
}