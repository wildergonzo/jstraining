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

var newTask = {
   "type": "task",
   "name": "testCreateTask"
};
frisby.create('agilefant should create a new task')
	.post('https://cloud.agilefant.com:443/wildergonzo/api/v1/tasks', newTask, jsonTrue)
	.expectStatus(201)
	.expectJSON('0', {
			'type': 'task'
	})
.toss();

var taskData = {
   "type": "task",
   "name": "taskToBeUpdated"
};
frisby.create('agilefant should update the name of an existent task')
	.post('https://cloud.agilefant.com:443/wildergonzo/api/v1/backlogs', taskData, jsonTrue)
	.expectStatus(201)
	.afterJSON(function(task){
		backlogData.name = "taskUpdated";
		frisby.create('update task name')
			.post('https://cloud.agilefant.com:443/wildergonzo/api/v1/tasks/' + task[0].id, taskData, jsonTrue)
			.expectStatus(200)
		.toss();
	})
.toss();
