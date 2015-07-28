var frisby = require('frisby');
var backlogId = {stories: 145526, tasks: 145761};
var expectedStories = [652018, 650888, 650887];
var expectedTasks = [464328, 464111];

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
