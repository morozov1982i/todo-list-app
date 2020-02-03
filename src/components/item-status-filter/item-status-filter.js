import React, { Component } from "react";

import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: "All", label: "Все" },
    { name: "Active", label: "Активные" },
    { name: "Done", label: "Готовые" }
  ];

  render() {
    const { listFilter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = listFilter === name;
      const clazz = isActive ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          key={name}
          className={`btn ${clazz}`}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}
