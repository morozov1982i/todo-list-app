import React from "react";

import TodoListItem from "../todo-list-item";

import "./todo-list.css";

const TodoList = ({ todoData, onDeleted, onToggleDone, onToggleImportant }) => {
  const elements = todoData.map(item => {
    const { id, ...itemProps } = item;

    return (
      <li className="list-group-item" key={id}>
        <TodoListItem
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
          {...itemProps}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
