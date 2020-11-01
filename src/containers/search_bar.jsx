import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setGIFS } from '../actions/index.js';

class SearchBar extends Component {
  handleUpdate = (event) => {
    const { setGIFS } = this.props;

    setGIFS(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="from-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setGIFS: setGIFS },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(SearchBar);
