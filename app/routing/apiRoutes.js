var path = require('path');
var allFriends = require('../data/friends.js');

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(allFriends);
    });
}



