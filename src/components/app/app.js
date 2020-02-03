import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";

import "./app.css";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.ceateTodoItem("Выучить React и Redux"),
      this.ceateTodoItem("Сделать крутячее приложение"),
      this.ceateTodoItem("Устроиться на работу")
    ],
    searchTerm: "",
    listFilter: "All"
  };

  ceateTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: ++this.maxId
    };
  }

  toggleProperty(arr, id, propName) {
    const newArr = arr.map(item => {
      return item.id !== id ? item : { ...item, [propName]: !item[propName] };
    });
    return [...newArr];
  }

  searchItems = (todoData, searchTerm) => {
    if (searchTerm === "") {
      return todoData;
    }
    return todoData.filter(item => {
      return item.label.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  };

  searchFilter = (items, filter) => {
    switch (filter) {
      case "All":
        return items;
      case "Active":
        return items.filter(item => !item.done);
      case "Done":
        return items.filter(item => item.done);
      default:
        return items;
    }
  };

  onSearchChange = searchTerm => {
    this.setState({ searchTerm });
  };

  onFilterChange = listFilter => {
    this.setState({ listFilter });
  };

  deleteItem = id => {
    const todoData = this.state.todoData.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todoData });

    /* this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const newTodoData = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];
      return { todoData: newTodoData };
    }); */
  };

  getMaxId = arr => {
    const ids = arr.map(item => {
      return item.id;
    });

    return Math.max(...ids);
  };

  addItem = str => {
    const newItem = {
      label: str,
      important: false,
      id: ++this.maxId
    };

    const todoData = [...this.state.todoData, newItem];

    this.setState({ todoData });
  };

  onToggleDone = id => {
    const todoData = this.toggleProperty(this.state.todoData, id, "done");
    this.setState({ todoData });
  };

  onToggleImportant = id => {
    const todoData = this.toggleProperty(this.state.todoData, id, "important");
    this.setState({ todoData });
  };

  render() {
    const { todoData, searchTerm, listFilter } = this.state;

    const visibleItems = this.searchFilter(
      this.searchItems(todoData, searchTerm),
      listFilter
    );

    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            onFilterChange={this.onFilterChange}
            listFilter={listFilter}
          />
        </div>
        <TodoList
          onDeleted={this.deleteItem}
          todoData={visibleItems}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
