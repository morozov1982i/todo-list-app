import React from "react";

import "./search-panel.css";

const SearchPanel = () => {
  return (
    <input
      type="text"
      placeholder="Пиши и ищи"
      className="form-control search-input"
      id="search"
    />
  );
};

export default SearchPanel;
