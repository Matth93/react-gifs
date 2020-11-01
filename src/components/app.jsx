import React, { Component } from 'react';

import SelectedGif from '../containers/selected_gif';
import GifList from '../containers/gif_list.jsx';
import SearchBar from '../containers/search_bar';

class App extends Component {

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <SelectedGif />
        </div>
        <div className="right-scene">
          <GifList />
        </div>
      </div>
    );
  }
}

export default App;
