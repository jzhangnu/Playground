var person = {
  name: 'Andrew',
  age: 24
}

var personJSON = JSON.stringify(person);

console.log(personJSON);

var personObject = JSON.parse(personJSON);

console.log(personObject);

console.log('challenge area');

var animal = '{"name": "Halley"}';

var a = JSON.parse(animal);

a.app = 1;

animal = JSON.stringify(a);

console.log(animal);
