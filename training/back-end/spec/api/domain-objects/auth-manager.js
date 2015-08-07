var request = require('superagent');
var authorized = false,
    authorization = '';
var authManager = {
    authorize: function (username, password) {
        authorization = 'Basic d2lsZGVyZ29uem8udGVzdEBnbWFpbC5jb206Q29udHJvbDEyMw==';
        authorized = true;
    },
    isAuthorized: function () {
        return authorized;
    },
    getAuthorization: function () {
        return authorization;
    },
    revokeAuthorization: function () {
        return false;
    }
};
module.exports = authManager;