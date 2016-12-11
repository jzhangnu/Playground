var argv = require('yargs').argv;

var command = argv._[0];



if (command === 'hello' && typeof argv.name !== 'undefined'){
  console.log('Hello ' + argv.name + ' !');
} else if (command === 'hello'){
  console.log('Hello world!');
}
