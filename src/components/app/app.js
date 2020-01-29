import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";

import "./app.css";

export default class App extends Component {
  state = {
    todoData: [
      { label: "Выучить React и Redux", important: false, id: 1 },
      { label: "Сделать крутячее приложение", important: false, id: 2 },
      { label: "Устроиться на работу", important: true, id: 3 }
    ]
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo="1" done="3" />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todoData={this.state.todoData} />
      </div>
    );
  }
}
