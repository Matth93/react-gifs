import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectGIF } from '../actions/index.js';

import Gif from './gif.jsx';

class SelectedGif extends Component {
  componentWillMount() {
    this.props.selectGIF("PnUatAYWMEMvmiwsyx");
  }

  render () {
    return (
      <div className="selected-gif">
        <Gif id={this.props.selectedGif} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectGIF: selectGIF },
    dispatch
  );
}

function mapStateToProps(State) {
  return {
    selectedGif: State.selectedGif
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedGif);
