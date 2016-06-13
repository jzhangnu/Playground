//ES6 syntax
// literally go from the library called react install an application as my dependcy
//assgin the var React

//React diversify to two parts
//core part: know how to work with react component(how to render them, how to nest them together)

import React, {Component} from 'react';

//Another part take the component's generated HTML and insert/put into the Dom called ReactDom
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//youtube api key
//npm install --save youtube-api-search
//save to the package.json
const api_key = 'AIzaSyBMjiShZO2nfufzgHsIdCuUy_Gjubzypa8';

//Delcaring var not change
//=> arrow function
//are a short syntax for function expressions
//can use them in place of expressions like function (foo) {...}
class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      videos:[],
      selectedVideo: null
    };

    this.videoSearch('nba')
  }

  videoSearch(term) {
    YTSearch({key: api_key, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange ={ term => this.videoSearch(term) }/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos= {this.state.videos}/>
      </div>
    );
  }
}
/*
const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}
*/
//whenever we want to use state, we must have a class based component
//pass instance to the app
ReactDOM.render(<App />, document.querySelector('.container'));
