var frisby = require('frisby');
var taskId = 464110;

frisby.globalSetup({
	request: {
		headers:{
			'Authorization': 'Basic d2lsZGVyZ29uem8udGVzdEBnbWFpbC5jb206Q29udHJvbDEyMw=='
		}
	}
});

frisby.create('agilefant should return the task data given an id')
	.get('https://cloud.agilefant.com:443/wildergonzo/api/v1/tasks/' + taskId)
	.expectStatus(200)
  .expectJSON('0', {
		'type': 'task',
		'id': 464110
	})
.toss();

frisby.create('agilefant should return the timeEntry data of a task')
	.get('https://cloud.agilefant.com:443/wildergonzo/api/v1/tasks/' + taskId + '/timeEntries')
	.expectStatus(200)
  .expectJSON('0', {
		'type': 'timeEntry',
		'id': 206696
	})
.toss();
