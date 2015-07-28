var frisby = require('frisby');
var storyId = 652018;
var expectedComments = [1310, 1309];

frisby.globalSetup({
	request: {
		headers:{
			'Authorization': 'Basic d2lsZGVyZ29uem8udGVzdEBnbWFpbC5jb206Q29udHJvbDEyMw=='
		}
	}
});

frisby.create('agilefant should return the story data given an id')
	.get('https://cloud.agilefant.com:443/wildergonzo/api/v1/stories/' + storyId)
	.expectStatus(200)
  .expectJSON('0', {
		'type': 'story',
		'id': 652018
	})
  //.inspectJSON()
.toss();

var commentsMatch = true;
frisby.create('agilefant should return all comment from a story')
	.get('https://cloud.agilefant.com:443/wildergonzo/api/v1/stories/' + storyId + '/comments')
	.expectStatus(200)
	.afterJSON(function(comments){
			for (var i=0; i<comments.length; i++){
					if (expectedComments.indexOf(comments[i].id) === -1) {
							commentsMatch = false;
					}
					expect(comments[i].type).toBe('comment');
			}
			expect(commentsMatch).toBeTruthy();
	})
.toss();
