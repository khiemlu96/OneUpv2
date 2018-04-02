const router = require('express').Router();
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const upload = require('express-fileupload');
const path = require('path');
const User = require('../models/user.js');
const Video = require('../models/video.js');

// Parse requests
router.use(upload());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(expressValidator());

// Use Passport's Local Strategy for authentication
passport.use(new LocalStrategy(
    function(username, password, done) {
        User.getUserByUsername(username, function(err, user) {
            if (err) {
                throw err;
            }
            if (!user) {
                console.log("The username doesn't exist");
                return done(null, false, {message: 'Unknown User'});
            }

            User.comparePassword(password, user.password, function(err, isMatch) {
                if (err) {
                    throw err;
                }
                if (isMatch) {
                    return done(null, user);
                } else {
                    console.log("The password does not match");
                    return done(null, false, {message: 'Invalid password'});
                }
            });
        });
    }
));

// Write data to user's session
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

// Retrieve data from user's session
passport.deserializeUser(function(id, done) {
    User.getUserById(id, function(err, user) {
        done(err, user);
    });
});

// Authenticate user to see if they are logged in
router.get('/api/verifyUser', function(request, response) {
    if (request.user) {
        response.json({
            loggedIn: true,
            user: request.user
        });
    } else {
        response.json({
            loggedIn: false,
            user: {}
        });
    }
});

router.post('/', function(request, response) {
    Video.findOneAndUpdate(
      {_id: request.body.videoID},
      {$set: {totalUpvotes: request.body.newTotalUpvotes}},
      function(err, doc) {
          if (err) {
              throw err;
          }
      }
    );
});

router.post('/settings', function(request, response) {
    if (request.files) {
        var file = request.files.profilepic,
            filename = file.name;
        console.log(file);
        file.mv(path.join(__dirname, "../public/profilepics/" + filename), function(err) {
            if (err) {
                console.log(err);
                response.send("error occurred");
            } else {
                var profilePicPath = '/profilepics/' + filename;
                User.updateUser(request.user.username, request.body, profilePicPath);
                return response.redirect('/profile');
            }
        });
    }
});

router.post('/uploadvideo', function(request, response) {
    if (request.files) {
        var file = request.files.videofile,
            filename = file.name;
        file.mv(path.join(__dirname, "../public/skateclips/" + filename), function(err) {
            if (err) {
                console.log(err);
                response.send("error occurred");
            } else {
                var vid = Video(
                    {
                        videoPath: 'public/skateclips/' + filename,
                        title: request.body.title,
                        description: request.body.description,
                        username: request.user.username,
                        totalUpvotes: 0
                    }
                ).save(function(err) {
                    if (err) {
                        throw err;
                    }
                    console.log("video saved");
                    return response.redirect('/');
                });
            }
        });
    }
});


router.post('/signin', passport.authenticate('local'), function(request, response) {
    return response.redirect('/profile');
});


router.post('/register', function(request, response) {
    var name = request.body.name;
    var email = request.body.email;
    var username = request.body.username;
    var password = request.body.password;
    var confirmedPassword = request.body.confirmedPassword;

    // Validation
    request.checkBody('name', 'Name is required').notEmpty();
    request.checkBody('email', 'Email is required').notEmpty();
    request.checkBody('email', 'Email is not valid').isEmail();
    request.checkBody('username', 'Username is required').notEmpty();
    request.checkBody('password', 'Password is required').notEmpty();
    request.checkBody('confirmedPassword', 'Passwords do not match').equals(request.body.password);

    var errors = request.validationErrors();

    if (errors) {
        for (var i = 0; i < errors.length; i++) {
            console.log(errors[i].msg);
        }
        return response.redirect('/register');
    } else {
        var newUser = new User({
            name: name,
            email: email,
            username: username,
            password: password
        });

        User.createUser(newUser, function(err, user) {
            if (err) {
                throw err;
            }
            return response.redirect('/signin');
        });
    }
});

module.exports = router;
