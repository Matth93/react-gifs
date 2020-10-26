import React, { Component } from 'react';

import Gif from './gif';
import GifList from './gif_list';
import SearchBar from './search_bar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [
      ],
      selectedGifID: ""
    };

    this.giphy = require('giphy-api')('YjCqU6J509Pc41dP3d6bVbgZypu5pgSr');

    this.search('nature');
  }

  search = (query) => {
    this.giphy.search({
      q: query,
      rating: 'r',
      limit: 15
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectGif = (gif) => {
    this.setState({
      selectedGifID: gif
    });
  }

  render() {
    const { selectedGifID, gifs } = this.state;

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif
              id={selectedGifID}
              selectGif={this.selectGif}
            />
          </div>
        </div>
        <div className="right-scene">
          <GifList
            gifs={gifs}
            selectGif={this.selectGif}
          />
        </div>
      </div>
    );
  }
}

export default App;
