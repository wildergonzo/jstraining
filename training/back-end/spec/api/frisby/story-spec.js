var frisby = require('frisby');
var storyId = 652018;
var expectedComments = [1310, 1309];
var jsonTrue = { json: true};

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

var newStory = {
   "type": "story",
   "name": "testCreateStory"
};
frisby.create('agilefant should create a new story')
	.post('https://cloud.agilefant.com:443/wildergonzo/api/v1/stories', newStory, jsonTrue)
	.expectStatus(201)
	.expectJSON('0', {
			'type': 'story'
	})
.toss();

var storyData = {
   "type": "story",
   "name": "storyToBeUpdated"
};
frisby.create('agilefant should update the name of an existent story')
	.post('https://cloud.agilefant.com:443/wildergonzo/api/v1/backlogs', storyData, jsonTrue)
	.expectStatus(201)
	.afterJSON(function(story){
		backlogData.name = "storyUpdated";
		frisby.create('update story name')
			.post('https://cloud.agilefant.com:443/wildergonzo/api/v1/stories/' + story[0].id, storyData, jsonTrue)
			.expectStatus(200)
		.toss();
	})
.toss();
