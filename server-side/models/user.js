var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Video = require('./video');

mongoose.connect('mongodb://test:test@ds113660.mlab.com:13660/oneup');

var UserSchema = mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    profilePicPath: {
        type: String
    },
    bio: {
        type: String
    },
    socialMediaOne: {
        type: String
    },
    socialMediaTwo: {
        type: String
    },
    socialMediaThree: {
        type: String
    },
    upvotedVideos: {
        type: [{}]
    },
    downvotedVideos: {
        type: [String]
    }
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.getUserByUsername = function(username, callback) {
    var query = {username: username};
    User.findOne(query, callback);
};

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if (err) {
            throw err;
        }
        callback(null, isMatch);
    });
};

module.exports.updateUser = function(user, updatedInfo, profilePicPath) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(updatedInfo.changedPassword, salt, function(err, hash) {
            updatedInfo.changedPassword = hash;
            User.findOneAndUpdate(
                {username: user},
                {
                    $set:
                    {
                        password: updatedInfo.changedPassword,
                        profilePicPath: profilePicPath,
                        socialMediaOne: updatedInfo.socialMediaOne,
                        socialMediaTwo: updatedInfo.socialMediaTwo,
                        socialMediaThree: updatedInfo.socialMediaThree,
                        bio: updatedInfo.changedBio
                    }
                },
                function(err, doc) {
                    if (err) {
                        throw err;
                    }
                });
        });
    });
};
