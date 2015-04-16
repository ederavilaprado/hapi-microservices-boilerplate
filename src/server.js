var Hapi = require('hapi');
var fs = require('fs');
var yaml = require('js-yaml');
var nconf = require('nconf');
var path = require('path');


(function loadConfigData() {
  // TODO: document the config example, first the env example. i.e.: server__port=3000
  nconf
    .argv({
      config: {
        alias: ['config-path', 'configPath', 'c']
      }
    })
    .env('__');

  nconf.defaults({
    'config': nconf.get('config') || nconf.get('CONFIG_PATH') || nconf.get('CONFIG') || path.resolve(__dirname, '..', 'config', 'default.yml')
  });

  nconf.file({
    file: nconf.get('config'),
    format: {
      stringify: function (obj, options) {
        return yaml.safeDump(obj, options)
      },
      parse: function (obj, options) {
        return yaml.safeLoad(obj, options)
      }
    }
  });
})();

var server = new Hapi.Server();

server.connection({
  host: nconf.get('server:host'),
  port: nconf.get('server:port')
});

// TODO: add cors
// cors: {
// origin: ['*'],
// additionalHeaders: ['x-api-key', 'x-api-token', 'x-client-id']
// },

// Add all routes
server.route(require('./routes'));

// Start the server
server.start(function startServer() {
  // TODO: Change this log to use some real log tool
  // TODO: try using server.log ?!?
  console.log('Server started at: ' + server.info.uri);

});

module.exports = server;
