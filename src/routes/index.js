var _ = require('lodash');
var path = require('path');
var fs = require('fs');


// Searching for routes in the folder
// TODO: implement recursive folder search for this part
var routeFiles = [];
_.forEach(fs.readdirSync(__dirname), function(f) {
    if (f === 'index.js' || !/.*\.js$/.test(f)) return; // this file

    try {
        routeFiles.push(require('./' + f));
    } catch (err) {
        console.error('Problems when loading module "' + f + '". Err.: ' + err);
    }
});

// Add base_path to routes who have one
var routes = [];
_.forEach(routeFiles, function(routeFile) {
    if (routeFile.basePath) {
        _.forEach(routeFile.routes, function(route) {
            route.path = routeFile.basePath + route.path;
        });
    }
    routes = routes.concat(routeFile.routes);
});

module.exports = routes;