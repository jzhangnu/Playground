//ES6 syntax
// literally go from the library called react install an application as my dependcy
//assgin the var React

//React diversify to two parts
//core part: know how to work with react component(how to render them, how to nest them together)

import React from 'react';

//Another part take the component's generated HTML and insert/put into the Dom called ReactDom
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
//youtube api key
//npm install --save youtube-api-search
//save to the package.json
const api_key = 'AIzaSyBMjiShZO2nfufzgHsIdCuUy_Gjubzypa8';

//Delcaring var not change
//=> arrow function
//are a short syntax for function expressions
//can use them in place of expressions like function (foo) {...}
const App = () => {
  return <div>hello world</div>;
}

//pass instance to the app
ReactDOM.render(<App />, document.querySelector('.container'));
ReactDOM.render(<SearchBar />, document.querySelector('.container'));
