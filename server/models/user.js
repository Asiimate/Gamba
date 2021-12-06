var mongoose = require('mongoose');

// Schema for users
var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isEmployee: {
        type: Boolean,
        required: true,
        default: false
    }
});

var User = module.exports = mongoose.model('User', userSchema);

/* BASIC CRUD FUNCTIONALITIES */
// Get Users
module.exports.getUsers = function(callback, limit){
    User.find(callback).limit(limit);
}

// Post User
module.exports.addUser = function(user, callback){
    User.create(user, callback);
}

// Update User
module.exports.updateUser = function(id, user, options, callback){
    var query = {_id: id};
    var update = {
        username: user.username,
        fullname: user.fullname,
        password: user.password,
        isEmployee: user.isEmployee
    };
    User.findOneAndUpdate(query, update, options, callback)
}

// Delete User
module.exports.deleteUser = function(id, callback){
    var query = {_id: id};
    User.deleteOne(query, callback);
}


/* ADVANCED REQUESTS */

// Get User by ID
module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}
