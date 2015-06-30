var controller = require('../controllers/example');

var r = [];


r.push({
  method: 'GET',
  path: '/hello',
  handler: controller.hello
});

r.push({
  method: 'GET',
  path: '/test',
  handler: controller.test
});

module.exports = {
  basePath: '/example',
  routes: r
}
