var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());
User = require('./models/user');
Draw = require('./models/draw');
Tip = require('./models/tip');

//connect to mongoose
mongoose.connect('mongodb://localhost/gamba');
var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Please use the /api/ Endpoint for requests');
});


//USERS
app.get('/api/users', function(req, res){
    User.getUsers(function(err, users){
        if(err){
            throw err;
        }
        res.json(users);
    })
});
app.get('/api/users/:_id', function(req, res){
    User.getUserById(req.params._id, function(err, user){
        if(err){
            throw err;
        }
        res.json(user);
    })
});
app.post('/api/users', function(req, res){
    var user = req.body;
    User.addUser(user, function(err, user){
        if(err){
            throw err;
        }
        res.json(user)
    });
});
app.delete('/api/users/:_id', function(req, res){
    var id = req.params._id;
    User.deleteUser(id, function(err, user){
        if(err){
            throw err;
        }
        res.json(user)
    });
});

//DRAWS
app.get('/api/draws', function(req, res){
    Draw.getDraws(function(err, draws){
        if(err){
            throw err;
        }
        res.json(draws);
    })
});
app.post('/api/draws', function(req, res){
    var draw = req.body;
    Draw.addDraw(draw, function(err, draw){
        if(err){
            throw err;
        }
        res.json(draw)
    });
});

//TIPS
app.get('/api/tips', function(req, res){
    Tip.getTips(function(err, tips){
        if(err){
            throw err;
        }
        res.json(tips);
    })
});
app.post('/api/tips', function(req, res){
    var tip = req.body;
    Tip.addTip(tip, function(err, tip){
        if(err){
            throw err;
        }
        res.json(tip)
    });
});
app.put('/api/tips/:_id', function(req, res){
    var id = req.params._id;
    var tip = req.body;
    Tip.updateTip(id, tip, {}, function(err, tip){
        if(err){
            throw err;
        }
        res.json(tip)
    });
});
app.get('/api/tips/username/:username', function(req, res){
    var username = req.params.username;
    Tip.getTipsByUsername(username, function(err, tips){
        if(err){
            throw err;
        }
        res.json(tips);
    });
});

app.listen(3000);
console.log('Running on Port 3000...');