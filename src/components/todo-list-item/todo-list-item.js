import React from "react";

import "./todo-list-item.css";

const TodoListItem = ({ todoData }) => {
  return (
    <span>
      <span className="todo-list-item-label">{todoData[0].label}</span>

      <button className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
