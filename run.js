if (process.argv.length < 3) {
  console.error('Invalid parameters');
  console.error('runapp <npm module>');
}

var module = require(process.argv[2]);
module.main();
