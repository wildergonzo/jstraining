var frisby = require('frisby');
var backlogId = {stories: 145526, tasks: 145761};
var expectedStories = [652018, 650888, 650887];
var expectedTasks = [464328, 464111];
var jsonTrue = { json: true};

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

var storiesMatch = true;
frisby.create('agilefant should return all stories from a backlog')
	.get('https://cloud.agilefant.com:443/wildergonzo/api/v1/backlogs/' + backlogId.stories + '/stories')
	.expectStatus(200)
	.afterJSON(function(stories){
			for (var i=0; i<stories.length; i++){
					if (expectedStories.indexOf(stories[i].id) === -1) {
							storiesMatch = false;
					}
					expect(stories[i].type).toBe('story');
			}
			expect(storiesMatch).toBeTruthy();
	})
.toss();

var tasksMatch = true;
frisby.create('agilefant should return all tasks from a backlog')
	.get('https://cloud.agilefant.com:443/wildergonzo/api/v1/backlogs/' + backlogId.tasks + '/tasks')
	.expectStatus(200)
	.afterJSON(function(tasks){
			for (var i=0; i<tasks.length; i++){
					if (expectedTasks.indexOf(tasks[i].id) === -1) {
							tasksMatch = false;
					}
					expect(tasks[i].type).toBe('task');
			}
			expect(tasksMatch).toBeTruthy();
	})
.toss();

var newBacklog = {
   "type": "product",
   "name": "testCreateBacklog" //update this for each execution.
};
frisby.create('agilefant should create a new backlog')
	.post('https://cloud.agilefant.com:443/wildergonzo/api/v1/backlogs', newBacklog, jsonTrue)
	.expectStatus(201)
	.expectJSON('0', {
			'type': 'product'
	})
.toss();

var backlogData = {
   "type": "product",
   "name": "backlogToBeUpdated" //update this for each execution.
};
frisby.create('agilefant should update the name of an existent backlog')
	.post('https://cloud.agilefant.com:443/wildergonzo/api/v1/backlogs', backlogData, jsonTrue)
	.expectStatus(201)
	.afterJSON(function(backlog){
		backlogData.name = "backlogUpdated";
		frisby.create('update name')
			.post('https://cloud.agilefant.com:443/wildergonzo/api/v1/backlogs/' + backlog[0].id, backlogData, jsonTrue)
			.expectStatus(200)
		.toss();
	})
.toss();

// not running in my env. error: Cannot call method 'replace' of null
/*var tempBacklog = {
   "type": "product",
   "name": "backlogToBeDeleted"
};
frisby.create('agilefant should create a backlog to be removed')
	.post('https://cloud.agilefant.com:443/wildergonzo/api/v1/backlogs', tempBacklog)
	.expectStatus(201)
	.afterJSON(function(backlog){
		frisby.create('agilefant should delete a backlog given an id')
			.delete('https://cloud.agilefant.com:443/wildergonzo/api/v1/backlogs/' + backlog[0].id)
			.expectStatus(200)
		.toss();
	}
.toss();*/
