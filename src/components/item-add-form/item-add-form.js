import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  state = {
    label: ""
  };
  onLabelChange = e => {
    this.setState({ label: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({ label: "" });
    document.getElementById("labelInput").focus();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="item-add-form d-flex">
        <input
          className="form-control"
          type="text"
          placeholder="Чё делать?"
          onChange={this.onLabelChange}
          value={this.state.label}
          id="labelInput"
        />
        <button className="btn btn-outline-secondary">Add Item</button>
      </form>
    );
  }
}
