import React from "react";

import TodoListItem from "../todo-list-item";

import "./todo-list.css";

const TodoList = ({ todoData }) => {
  return (
    <div>
      <ul className="list-group todo-list">
        <li className="list-group-item">
          <TodoListItem todoData={todoData} />
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
