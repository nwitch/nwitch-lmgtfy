var lmgtfy = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');
var Stream = require('readable-stream').PassThrough;
var irc = require('slate-irc');

test('exports a function which returns a function when called', function(t) {
  t.plan(2);
  t.ok(isFunction(lmgtfy));
  t.ok(isFunction(lmgtfy()));
});

test('googles that for you', function(t) {
  t.plan(2);
  var stream = new Stream();
  var client = irc(stream);
  client.use(lmgtfy());

  var n = 0;
  stream.on('data', function(chunk) {
    switch (n++) {
      case 0:
        t.equal(chunk, 'PRIVMSG #nwitch :!lmgtfy how do i javascript\r\n');
        break;
      case 1:
        t.equal(chunk, 'PRIVMSG #nwitch :: http://lmgtfy.com/?q=how+do+i+javascript\r\n');
        break;
    }
  });

  stream.write('PRIVMSG #nwitch :!lmgtfy how do i javascript\r\n');
});