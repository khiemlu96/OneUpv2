var mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@ds113660.mlab.com:13660/oneup');

var VideoSchema = mongoose.Schema({
    videoPath: {
        type: String
    },
    totalUpvotes: {
        type: Number
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    username: {
        type: String
    }
});

var Video = module.exports = mongoose.model('Video', VideoSchema);
