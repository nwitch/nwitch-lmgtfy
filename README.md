# nwitch-lmgtfy

[![Dependency Status](https://gemnasium.com/nwitch/nwitch-lmgtfy.svg)](https://gemnasium.com/nwitch/nwitch-lmgtfy)

[nwitch][] (and [slate-irc][]) plugin for [lmgtfy](http://lmgtfy.com/).

``` irc
05:34 <KenanY> !lmgtfy how do i javascript
05:34 <nwitch> KenanY: http://lmgtfy.com/?q=how+do+i+javascript
```

## Example

As a [nwitch][] plugin (using `config.toml`):

``` toml
[plugins]
nwitch-lmgtfy = true
```

Or through [nwitch][]'s API:

``` javascript
var Nwitch = require('nwitch');
var lmgtfy = require('nwitch-lmgtfy');

var nwitch = new Nwitch({
  irc: {
    address: 'irc.freenode.org',
    port: 6667
  }
});

nwitch.use(lmgtfy());
```

Technically, all [nwitch][] plugins are just [slate-irc][] plugins, so you could
also use this as a [slate-irc][] plugin:

``` javascript
var net = require('net');
var irc = require('slate-irc');
var lmgtfy = require('nwitch-lmgtfy');

var stream = net.connect({
  port: 6667,
  host: 'irc.freenode.org'
});

var client = irc(stream);
client.use(lmgtfy());
```

## Installation

``` bash
$ npm install --save nwitch-lmgtfy
```

## API

``` javascript
var lmgtfy = require('nwitch-lmgtfy');
```

### `lmgtfy()`

Returns a function that accepts an instance of [slate-irc][].


  [nwitch]: https://github.com/KenanY/nwitch
  [slate-irc]: https://github.com/slate/slate-irc