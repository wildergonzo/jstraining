var request = require('superagent');
var backlog = require('../domain-objects/backlogs.js');
var backlogId = {stories: 145526, tasks: 145761};
var expectedStories = [652018, 650888, 650887];

describe('Agilefant SuperAgent Tests', function(){
	//beforeEach(function (){});
	//aferEach(function (){});

    var storiesMatch = true;

    it('agilefant should retrieve all stories from a backlog given an id', function (done){
        backlog.getAll(backlogId.stories, function (response) {
          var stories = response.body;
          for (var i=0; i<stories.length; i++){
            if (expectedStories.indexOf(stories[i].id) === -1) {
                storiesMatch = false;
            }
            expect(stories[i].type).toBe('story');
          }
          expect(storiesMatch).toBeTruthy();
          done();
        });
	  });

    it('agilefant should create a new backlog', function (done){
      var newBacklog = {
         "type": "product",
         "name": "testCreateBacklog"
      };
      backlog.create(newBacklog, function (response){
          expect(response.body[0].type).toBe('product');
          done();
      });
	  });
});
