var behest = require('behest');

function lmgtfy() {
  return function(irc) {
    irc.on('message', function(evt) {
      var from = evt.from;
      var to = evt.to;
      var message = evt.message;

      if (!behest.isValid(message)) {
        return;
      }

      var command = behest(message);
      if (command.command === 'lmgtfy') {
        var destination = to.charAt(0) === '#' ? to : from;
        irc.send(destination, 'http://lmgtfy.com/?q=' + command.params.join('+'));
      }
    });
  };
}

module.exports = lmgtfy;