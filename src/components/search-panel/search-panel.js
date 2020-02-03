import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    searchTerm: ""
  };

  onSearchChange = e => {
    const searchTerm = e.target.value;
    this.setState({ searchTerm });
    this.props.onSearchChange(searchTerm);
  };

  render() {
    return (
      <input
        onChange={this.onSearchChange}
        type="text"
        placeholder="Пиши и ищи"
        className="form-control search-input"
        id="search"
        value={this.state.searchTerm}
      />
    );
  }
}
