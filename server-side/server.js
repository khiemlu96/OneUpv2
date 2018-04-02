const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const expressValidator = require('express-validator');
const routes = require('./routes/index.js');
const Video = require('./models/video.js');

const app = express();

// Connect to mLab Database
mongoose.connect('mongodb://test:test@ds113660.mlab.com:13660/oneup');

app.use(express.static(__dirname + '/public'));

// BodyParser Middleware
app.use(cookieParser());

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: false
}));

// Begin Passport Session
app.use(passport.initialize());
app.use(passport.session());

// Express Validator for registering user
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
            , root = namespace.shift()
            , formParam = root;

        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));

// Use Routes from index.js
app.use(routes);

/*

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Steve', lastName: 'Smith'},
        {id: 3, firstName: 'Mary', lastName: 'Swanson'},
        {id: 4, firstName: 'Stevie', lastName: 'Wonder'}
    ];

    res.json(customers);
}); */

// Grab and sort videos from the database
app.get('/api/videos', (req, res) => {
    Video.find().sort({totalUpvotes: -1}).exec(function (err, video) {
        res.json(video);
    });
});

const port = 5000;

app.listen(port, () => console.log('Server started on port 5000'));
