console.log('starting password-manager');

var storage = require('node-persist');

storage.initSync();
//store the data in local

// account.name
// account.username
// account.password

var argv = require('yargs')
    .command('create', 'Create a new account', function(yargs){
      yargs.option({
        name: {
          demand: true,
          alias: 'n',
          description: 'Account name',
          type: 'string'
        },
        username: {
          demand: true,
          alias: 'u',
          description: 'Account username',
          type: 'string'
        },
        password: {
          demand: true,
          alias: 'p',
          description: 'Account password',
          type: 'string'
        }
      }).help('help');
    })
    .command('get', 'Get an existing account', function(yargs){
      yargs.options({
        name: {
          demand: true,
          alias: 'n',
          description: 'Account name',
          type: 'string'
        }
      }).help('help');
    })
    .help('help')
    .argv;

var command = argv._[0];



function createAccount (account){
  var accounts = storage.getItemSync('accounts');
                        //take one argu as string

  if (typeof accounts === undefined){
      accounts = [];

  }

  accounts.push(account);
  storage.setItemSync('accounts', accounts);

  return account;

}

function getAccount (accountName){

  var accounts = storage.getItemSync('accounts');

  var mactchedAccount;

  accounts.forEach(function (account){
    if(account.name === accountName){
      mactchedAccount = account;
    }
  })

  return mactchedAccount;

}

if(command === 'create'){
  var createAccount = createAccount({
    name: argv.name,
    username: argv.username,
    password: argv.password
  });
  console.log('Account created!');
  console.log(createAccount);
}else if(command === 'get') {
  var fetchedAccount = getAccount(argv.name);

  if (typeof fetchedAccount === 'undefined'){
    console.log('Account not found');
  } else {
    console.log('Account found!');
    console.log(fetchedAccount);
  }

}
