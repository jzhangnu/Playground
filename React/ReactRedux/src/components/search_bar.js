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

    this.state = { term:'Starting Value' };
  }
//every time the state of the component changed
//the render function will be rerendered
//functional component don't have state. Only class components do

  render() {
//still a function
//every class have the render function must return some jsx
//otherwise it will end up with a error
//do not change the value just change trigger the events
//event.target.value
    return (
      <div className = 'search-bar'>
        <input
          value = {this.state.term}
          onChange = { event => this.onInputChange(event.target.value)} />
        <p>The value of term is: {this.state.term}</p>
      </div>
    );
    //emit a change event
  }


  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);

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
