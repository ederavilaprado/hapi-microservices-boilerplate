var server = require('./src/server');

// if (nconf.get('NODE_ENV') === 'production') {
//   server.start(function serverStart() {
//     // TODO: Change this log to use some real log tool
//     // TODO: try using server.log ?!?
//     console.log('Server started at: ' + server.info.uri.cyan);
//   });
// } else {
//   var Blipp = require('blipp');

//   server.register(Blipp, function(err) {
//     if (err) {
//       console.log('Faiel to start server with Blipp plugin. Err.: ' + err.stack);
//       process.exit(1);
//     }
//     server.start(function serverStart() {
//       // TODO: Change this log to use some real log tool
//       // TODO: try using server.log ?!?
//       console.log('Server started...');
//     });
//   });
// }
