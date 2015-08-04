var frisby = require('frisby');
var userId = 55105;
var expectedUsers = [55105, 56044, 56045, 56046];
var expectedSories = [650886, 652014, 652018, , 640161, 640157,
                      652013, 650887, 640168, 650888, 640171, 652012];
var expectedTasks = [453599, 464328, 464111];
var expectedTeams = [26437, 25937];
var expectedTasksInQueue = [453599, 453600];

frisby.globalSetup({
	request: {
		headers:{
			'Authorization': 'Basic d2lsZGVyZ29uem8udGVzdEBnbWFpbC5jb206Q29udHJvbDEyMw=='
		}
	}
});

var usersMatch = true;
frisby.create('agilefant should return all users')
	.get('https://cloud.agilefant.com:443/wildergonzo/api/v1/users/all')
	.expectStatus(200)
	.afterJSON(function(users){
			for (var i=0; i<users.length; i++){
					if (expectedUsers.indexOf(users[i].id) === -1) {
							usersMatch = false;
					}
					expect(users[i].type).toBe('user');
			}
			expect(usersMatch).toBeTruthy();
	})
.toss();

frisby.create('agilefant should return the user data given an id')
	.get('https://cloud.agilefant.com:443/wildergonzo/api/v1/users/' + userId)
	.expectStatus(200)
  .expectJSON('0', {
		'type': 'user',
		'id': 55105
	})
.toss();

var storiesMatch = true;
frisby.create('agilefant should return not done stories for which a user is responsible for')
	.get('https://cloud.agilefant.com:443/wildergonzo/api/v1/users/' + userId + '/stories/notDone')
	.expectStatus(200)
	.afterJSON(function(stories){
			for (var i=0; i<stories.length; i++){
					if (expectedSories.indexOf(stories[i].id) === -1) {
							storiesMatch = false;
					}
					expect(stories[i].type).toBe('story');
			}
			expect(storiesMatch).toBeTruthy();
	})
.toss();

frisby.create('agilefant should return current logged in user data')
	.get('https://cloud.agilefant.com:443/wildergonzo/api/v1/users/loggedIn')
	.expectStatus(200)
	.afterJSON(function(user){
      expect(user.type).toBe('user');
			expect(user.id).toBe(55105);
      expect(user.admin).toBeTruthy();
      expect(user.teams[0].id).toBe(25937);
      expect(user.teams[0].type).toBe('team');
      expect(user.teams[0].name).toBe('Admin team');
      expect(user.organizations[0].type).toBe('organization');
      expect(user.organizations[0].id).toBe(21080);
      expect(user.organizations[0].name).toBe('wildergonzo');
      expect(user.organizations[0].state).toBe('active');
	})
.toss();

var tasksMatch = true;
frisby.create('agilefant should return not done tasks which are in iterations')
	.get('https://cloud.agilefant.com:443/wildergonzo/api/v1/users/' + userId + '/tasks/inIterations')
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

var teamsMatch = true;
frisby.create('agilefant should return teams for a user')
	.get('https://cloud.agilefant.com:443/wildergonzo/api/v1/users/' + userId + '/teams')
	.expectStatus(200)
	.afterJSON(function(teams){
			for (var i=0; i<teams.length; i++){
					if (expectedTeams.indexOf(teams[i].id) === -1) {
							teamsMatch = false;
					}
					expect(teams[i].type).toBe('team');
			}
			expect(teamsMatch).toBeTruthy();
	})
.toss();

var tasksInQueueMatch = true;
frisby.create('agilefant should returns not done tasks which user has added to task queue')
	.get('https://cloud.agilefant.com:443/wildergonzo/api/v1/users/' + userId + '/tasks/inQueue')
	.expectStatus(200)
	.afterJSON(function(tasks){
			for (var i=0; i<tasks.length; i++){
					if (expectedTasksInQueue.indexOf(tasks[i].id) === -1) {
							tasksInQueueMatch = false;
					}
					expect(tasks[i].type).toBe('task');
			}
			expect(tasksInQueueMatch).toBeTruthy();
	})
.toss();
