var path = require('path');
var friends = require('../data/friends.js');

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function(req, res){
        var surveyAnswers = req.body;

        var userScores = surveyAnswers.scores;

        var newFriendName = '';
        var newFriendPhoto = '';
        
        console.log('surveyAnswers = ' + JSON.stringify(surveyAnswers));
        for (var i = 0; i < friends.length; i++) {

            for (var j = 0; j < friends.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userScores[j]);
            }

            
        }
        friends.push(surveyAnswers);
    });
}







