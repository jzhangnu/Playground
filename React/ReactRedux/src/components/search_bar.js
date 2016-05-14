//React into this scope
import React, { Component } from 'react';
//this = const Component = React.Component;

/*
const SearchBar = () => {
  return <input />;
};
*/

//declare a new class
//give the SearchBar bunch of functionaility from React.Component class!
class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term:'' };
  }
//every time the state of the component changed, the render function will be rerendered
//functional component don't have state. Only class components do

  render() {
//still a function
//every class have the render function must return some jsx otherwise it will end up with a error
    return (
      <div>
        <input onChange = {(event) => this.setState({ term: event.target.value })} />
        //do not change the value just change trigger the events
        <p>The value of term is: {this.state.term}</p>
      </div>
    );
    //emit a change event
  }
}




/*
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}
*/


export default SearchBar;
