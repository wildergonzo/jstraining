var request = require('superagent');
var auth = require('./auth-manager.js');

var backlogs = {
	getAll: function (backlogId, callback){
    //console.log('https://cloud.agilefant.com:443/wildergonzo/api/v1/backlogs/145526/stories');
		var _request = request
			.get('https://cloud.agilefant.com:443/wildergonzo/api/v1/backlogs/' + backlogId + '/stories')
		    if (auth.isAuthorized()){
			      _request = _request
					  .set('Authorization', auth.getAuthorization())
		    } else {
            auth.authorize('user', 'email');
            _request = _request
            .set('Authorization', auth.getAuthorization())
        }
		  _request
			.end(function (error, response){
					if (error){
              console.log('Error: ', error);
					}
					callback(response);
			});
	},
	create: function (newBacklog, callback){
      if (!auth.isAuthorized()){
			     auth.authorize('user', 'email');
		  }
		  request
			.post('https://cloud.agilefant.com:443/wildergonzo/api/v1/backlogs')
			.set('Authorization', auth.getAuthorization())
			.send(newBacklog)
			.end(function (error, response){
          if (error){
					       console.log('Error: ', error);
				  }
				  callback(response);
			});
	}
};
module.exports = backlogs;
