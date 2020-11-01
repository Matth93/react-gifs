import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectGIF } from '../actions/index.js';

class Gif extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   const { id } = this.props;
  //   return nextProps.id !== id;
  // }

  handleClick = () => {
    const { selectGIF, id } = this.props;

    selectGIF(id);
  }

  render() {
    const { id } = this.props;

    const src = `https://media3.giphy.com/media/${id}/giphy.gif`;
    return (
      <div>
        <img
          src={src}
          alt=""
          className="gif"
          onClick={this.handleClick}
        />
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

function mapStateToProps(reduxState) {
  return {
    gifs: reduxState.gifs
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gif);
