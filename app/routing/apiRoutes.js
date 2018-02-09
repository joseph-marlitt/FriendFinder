var path = require('path');
var friends = require('../data/friends.js');

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function(req, res){
        var surveyAnswers = req.body;

        var userScores = surveyAnswers.scores;

        var matchName = '';
        var matchPhoto = '';
        var differencetotal = 100;

        console.log('surveyAnswers = ' + JSON.stringify(surveyAnswers));
        for (var i = 0; i < friends.length; i++) {

            var diff = 0;
            for (var j = 0; j < friends.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userScores[j]);
            }

            if (diff < differencetotal){
                console.log('Closest match found = ' + diff);
				console.log('Friend name = ' + friends[i].name);
				console.log('Friend image = ' + friends[i].photo);
            }
            
        }
        friends.push(surveyAnswers);
        res.json({matchName: matchName, matchPhoto: matchPhoto});
    });
}







