import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputTerm: ''
    };
  }


  handleUpdate = (event) => {
    const { searchFunction } = this.props;

    this.setState({
      inputTerm: event.target.value
    });

    searchFunction(event.target.value);
  }

  render() {
    const { inputTerm } = this.state;

    return (
      <input
        value={inputTerm}
        type="text"
        className="from-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
