var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 8000
});

// TODO: add cors
// cors: {
// origin: ['*'],
// additionalHeaders: ['x-api-key', 'x-api-token', 'x-client-id']
// },

// Add all routes
server.route(require('./routes'));

// Start the server
server.start(function() {
    // TODO: Change this log to use some real log tool
    // TODO: try using server.log ?!?
    console.log('Server started at: ' + server.info.uri);

});

module.exports = server;