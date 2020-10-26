import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input_term: ''
    };
  }


  handleUpdate = (event) => {
    this.setState ({
      input_term: event.target.value
    });

    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input
        value={this.state.input_term}
        type="text"
        className="from-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
