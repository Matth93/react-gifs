import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setGIFS } from '../actions/index.js';

import Gif from './gif.jsx';

class GifList extends Component {
  componentWillMount() {
    this.props.setGIFS("nature");
  }

  renderList = () => {
    const { gifs, selectGif } = this.props;

    return gifs.map(({ id }) => {
      return <Gif id={id} key={id} selectGif={selectGif} />;
    });
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setGIFS: setGIFS },
    dispatch
  );
}

function mapStateToProps(reduxState) {
  return {
    gifs: reduxState.gifs
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GifList);
