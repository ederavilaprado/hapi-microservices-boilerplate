var hello = function hello(req, reply) {
  reply('hello world');
};

var test = function test(req, reply) {
  reply('test');
};


module.exports.hello = hello;
module.exports.test = test;
