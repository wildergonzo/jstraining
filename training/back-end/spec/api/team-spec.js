var frisby = require('frisby');
var teamId = 25937;
var expectedTeams = [25937, 26437];

frisby.globalSetup({
	request: {
		headers:{
			'Authorization': 'Basic d2lsZGVyZ29uem8udGVzdEBnbWFpbC5jb206Q29udHJvbDEyMw=='
		}
	}
});

var teamsMatch = true;
frisby.create('agilefant should return all teams')
	.get('https://cloud.agilefant.com:443/wildergonzo/api/v1/teams/all')
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

frisby.create('agilefant should return the team data given an id')
	.get('https://cloud.agilefant.com:443/wildergonzo/api/v1/teams/' + teamId)
	.expectStatus(200)
  .expectJSON('0', {
		'type': 'team',
		'id': 25937
	})
.toss();
