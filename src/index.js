import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyACPVxW5pd0tUp6GB3ezP8HU5Xp4Jm21nY'; //youtube v3 private api key

//const was introducted in es6. Instead of var we use const as its a constant
// <div>Hi!</div>;  this is not html but jsx syntex. Babel interpretor will use it to generate html

/* new Component to produce HTML */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
    this.videoSearch('surfboard');
  }
  
  videoSearch(term) {
    YTSearch({key:API_KEY, searchKey: 'surfboard'}, (videos) => {
        this.setState({videos: videos, selectedVideo: videos[0]});
    });
  }
  
  render () {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300); //300ms
    
    return (
        <div>
          <SearchBar onTermChange={videoSearch} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList 
            videos={this.state.videos}
            onVideoSelect = {selectedVideo => this.setState({selectedVideo}) } />
        </div>
    );
  }
}

/* in lambda 
  const App = () => {
    return <div>Hi!</div>;
  }
*/

// Making react to put generated html in DOM
//We need to instantiate a Component before passing it to render
/*
In jsx, surrounding object name with class name created a object
<div></div> is equivalent to <div />
*/

ReactDOM.render(<App />, document.querySelector('.container'));
//Render object of App class into DOM target



