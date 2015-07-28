var frisby = require('frisby');
var commentId = 1329;
var jsonTrue = { json: true};

frisby.globalSetup({
	request: {
		headers:{
			'Authorization': 'Basic d2lsZGVyZ29uem8udGVzdEBnbWFpbC5jb206Q29udHJvbDEyMw=='
		}
	}
});

var newComment = {
   "type": "comment",
   "content": "test comment from frisby test" //update this for each execution.
};
frisby.create('agilefant should create a new comment')
	.post('https://cloud.agilefant.com:443/wildergonzo/api/v1/comments', newComment, jsonTrue)
	.expectStatus(201)
  .expectJSON('0', {
		'type': 'comment'
	})
.toss();

frisby.create('agilefant should get comment data given an id')
	.get('https://cloud.agilefant.com:443/wildergonzo/api/v1/comments/' + commentId)
	.expectStatus(200)
  .expectJSON('0', {
		'type': 'comment',
		'id': 1329
	})
.toss();
