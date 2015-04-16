var routes = [{
  method: 'GET',
  path: '/hello',
  handler: function hello(request, reply) {
    reply('hello world');
  }
}, {
  method: 'GET',
  path: '/test',
  handler: function test(request, reply) {
    reply('testHere');
  }
}];

module.exports.basePath = '/example';
module.exports.routes = routes;
