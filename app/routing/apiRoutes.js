var friendsArr = require('../data/friends.js');

module.exports = function(app){
    
    app.get('/api/friends', function(req, res){
        res.json(friendsArr);
    })


    app.get('/api/friends', function(req, res){

        res.json(bestMatch);        
    })


}

