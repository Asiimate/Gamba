var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const cors = require('cors');



app.use(bodyParser.json());
//Work-around for CORS-Headers
const options = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: 'http://localhost:4200',
    preflightContinue: false,
};
app.use(cors(options));

//loading mongoose Models
User = require('./models/user');
Draw = require('./models/draw');
Tip = require('./models/tip');

//connect to mongoose
mongoose.connect('mongodb://localhost/gamba');
var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Please use the /api/ Endpoint for requests');
});


/* USER FUNCTIONALITIES */
//Get all Users
app.get('/api/users', function(req, res){
    User.getUsers(function(err, users){
        if(err){
            throw err;
        }
        res.json(users);
        console.log(`Get Users successful.`);
    });
});

//Get User by ID
app.get('/api/users/:_id', function(req, res){
    var id = req.params._id
    User.getUserById(id, function(err, user){
        if(err){
            throw err;
        }
        res.json(user);
        console.log(`Get User ${id} successful.`);
    })
});

//Create User
app.post('/api/users', function(req, res){
    var user = req.body;
    User.addUser(user, function(err, user){
        if(err){
            throw err;
        }
        res.json(user)
        console.log(`User has been created.`, user);
    });
});

//Delete User
app.delete('/api/users/:_id', function(req, res){
    var id = req.params._id;
    User.deleteUser(id, function(err, user){
        if(err){
            throw err;
        }
        res.json(user)
        console.log(`User ${id} deleted.`);
    });
});

//Update User
app.put('/api/users/:_id', function(req, res){
    var id = req.params._id;
    var user = req.body;
    User.updateUser(id, user, {}, function(err, user){
        if(err){
            throw err;
        }
        res.json(user);
        console.log(`User ${id} updated.`);
    });
});

//Authenticate User
app.post('/api/users/login', asyncHandler(login));
async function login(req, res, next) {
    const user = req.body;
    console.log(`Searching for user`, user);
    const savedUser = await User.getUserByNameAndPassword(user.username, user.password);
    res.json(savedUser);
}


/* DRAWS FUNCTIONALITIES */

//Get all Draws
app.get('/api/draws', function(req, res){
    Draw.getDraws(function(err, draws){
        if(err){
            throw err;
        }
        res.json(draws);
        console.log(`Get all Draws successful.`);
    });
});

//Create Draw
app.post('/api/draws', function(req, res){
    var draw = req.body;
    Draw.addDraw(draw, function(err, draw){
        if(err){
            throw err;
        }
        res.json(draw)
        console.log(`Draw has been created.`, draw);
    });
});

//Update Draw
app.put('/api/draws/:_id', function(req, res){
    var id = req.params._id;
    var draw = req.body;
    Draw.updateDraw(id, draw, {}, function(err, draw){
        if(err){
            throw err;
        }
        res.json(draw);
        console.log(`Draw ${id} updated.`);
    });
});

//Delete Draw
app.delete('/api/draws/:_id', function(req, res){
    var id = req.params._id;
    Draw.deleteDraw(id, function(err, draw){
        if(err){
            throw err;
        }
        res.json(draw);
        console.log(`Draw ${id} deleted.`);
    });
});


/* TIPS FUNCTIONALITIES */

//Get all Tips
app.get('/api/tips', function(req, res){
    Tip.getTips(function(err, tips){
        if(err){
            throw err;
        }
        res.json(tips);
        console.log(`Get all tips successful.`);
    });
});

//Create Tip
app.post('/api/tips', function(req, res){
    var tip = req.body;
    Tip.addTip(tip, function(err, tip){
        if(err){
            throw err;
        }
        res.json(tip);
        console.log(`Tip has been created.`, tip);
    });
});

//Update Tip
app.put('/api/tips/:_id', function(req, res){
    var id = req.params._id;
    var tip = req.body;
    Tip.updateTip(id, tip, {}, function(err, tip){
        if(err){
            throw err;
        }
        res.json(tip);
        console.log(`Tip ${id} updated.`);
    });
});

//Delete Tip
app.delete('/api/tips/:_id', function(req, res){
    var id = req.params._id;
    Tip.deleteTip(id, function(err, tip){
        if(err){
            throw err;
        }
        res.json(tip);
        console.log(`Tip ${id} has been deleted.`);
    });
});

//Get tips by username
app.get('/api/tips/username/:username', function(req, res){
    var username = req.params.username;
    Tip.getTipsByUsername(username, function(err, tips){
        if(err){
            throw err;
        }
        res.json(tips);
        console.log(`Get tips for username ${username} successful.`);
    });
});

//Get undrawn tips
app.get('/api/tips/undrawn', function(req, res){
    Tip.getUndrawnTips(function(err, tips){
        if(err){
            throw err;
        }
        res.json(tips);
        console.log(`Get undrawn tips successfull.`);
    })
})

//Update undrawn tips
app.put('/api/tips/draw/lol', function(req, res){
    var draw = req.body;
    Tip.drawTips(draw, {}, function(err, tips){
        if(err){
            throw err;
        }
        res.json(tips);
        console.log(`Undrawn tips updated.`);
    })
})

app.listen(3000);
console.log('Running on Port 3000...');