var request = require('superagent');
var autorizationToken = 'Basic d2lsZGVyZ29uem8udGVzdEBnbWFpbC5jb206Q29udHJvbDEyMw==';
var backlogId = {stories: 145526, tasks: 145761};
var expectedStories = [652018, 650888, 650887];

describe('Todo.ly SuperAgent Tests', function(){
	//beforeEach(function (){});
	//aferEach(function (){});
    
    var storiesMatch = true;
    it('agilefant should update the name of an existent backlog', function (done){
		request
			.get('https://cloud.agilefant.com:443/wildergonzo/api/v1/backlogs/' + backlogId.stories + '/stories')
			.set('Authorization', autorizationToken)
			.end(function (error, response){
                var stories = response.body;
				for (var i=0; i<stories.length; i++){
					if (expectedStories.indexOf(stories[i].id) === -1) {
							storiesMatch = false;
					}
					expect(stories[i].type).toBe('story');
                }
                expect(storiesMatch).toBeTruthy();
				done();
			});
	});
	
	/*var backlogData = {
       "type": "product",
       "name": "backlogToBeUpdated"
    };
	it('agilefant should update the name of an existent backlog', function (done){
		request
			.post('https://cloud.agilefant.com:443/wildergonzo/api/v1/backlogs')
			.set('Authorization', autorizationToken)
			.send(backlogData)
			.end(function (error, response){
                console.log(response.body)
				expect(response.body.type).toBe('product');
				done();
			});
	});*/
});