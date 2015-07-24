var frisby = require('frisby');

frisby.globalSetup({
	request: {
		headers:{
			'Authorization': 'Basic d2lsZGVyZ29uem8udGVzdEBnbWFpbC5jb206Q29udHJvbDEyMw=='
		}
	}
});

frisby.create('agilefant should return OK response to backlog list request')
	.get('https://cloud.agilefant.com:443/wildergonzo/api/v1/backlogs/all')
	.expectStatus(200)
.toss();
