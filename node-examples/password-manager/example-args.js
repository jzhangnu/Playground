var argv = require('yargs')
    .command('hello', 'Greets the User', function(yargs){
      yargs.option({
        name: {
          demand: true,
          alias: 'n', //shortcut
          description: 'Your first name goes here'，
          type: 'string'
        },
        lastname: {
          demand: true,
          alias: 'l', //shortcut
          description: 'Your last name goes here',
          type: 'string'
        }
      }).help('help')
    })
    .help('help')
    .argv;
//store all the arguments pass to our program.

var command = argv._[0];

console.log(argv)

if(command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined'){
   console.log('Hello ' + argv.name + argv.lastname + '!');
}else if(command === 'hello' && typeof argv.name !== 'undefined'){
   console.log('Hello ' + argv.name + '!');
}else if (command === 'hello'){
  console.log('Hello World')
}
