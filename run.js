#!/usr/bin/env node

// console.log(process.cwd());

if (process.argv.length < 3) {
  console.error('Invalid parameters');
  console.error('runapp <npm module>');
}

var modulename = process.argv[2];
var modulepath;
if (modulename.endsWith('.js') || modulename.endsWith('.mjs')) {
  var path = require('path');
  modulepath = path.join(process.cwd(), modulename);
} else {
  modulepath = modulename;
}
var module = require(modulepath);
module.main();
