var routes = [{
    method: 'GET',
    path: '/hello',
    handler: function(request, reply) {
        reply('hello world');
    }
}, {
    method: 'GET',
    path: '/test',
    handler: function(request, reply) {
        reply('testHere');
    }
}];


// module.exports.basePath = '/example';
module.exports.routes = routes;