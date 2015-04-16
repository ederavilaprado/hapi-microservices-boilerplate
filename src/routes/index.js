var _ = require('lodash');
var fs = require('fs');

// Searching for routes in the folder
// TODO: implement recursive folder search for this part; maybe using blob
var routeFiles = [];
_.forEach(fs.readdirSync(__dirname), function eachFile(f) {
  // check if is not this file ?!?
  if (f === 'index.js' || !/.*\.js$/.test(f)) return;

  try {
    routeFiles.push(require('./' + f));
  } catch (err) {
    console.error('Problems when loading module "' + f + '". Err.: ' + err);
  }
});

// Add base_path to routes who have one
var routes = [];
_.forEach(routeFiles, function eachRouteFile(routeFile) {
  if (routeFile.basePath) {
    _.forEach(routeFile.routes, function eachRoute(route) {
      route.path = routeFile.basePath + route.path;
    });
  }

  routes = routes.concat(routeFile.routes);
});

module.exports = routes;
