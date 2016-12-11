var crypto = require('crypto-js');

var secretMessage = {
  name: 'Jason',
  secretName: '007'
};
var secretKey = '123abc';

//Encrypt
var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);

console.log('Encrypted Message: ' + encryptedMessage);

//Decrypt Message
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decrytedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log('DecryptedMessage: ' + decrytedMessage);
