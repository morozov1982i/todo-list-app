import React from "react";

import "./app-header.css";

const AppHeader = ({ toDo = 0, done = 0 }) => {
  return (
    <div className="app-header d-flex">
      <h1>Дела-заботы</h1>
      <h2>
        Сделать ещё: {toDo}, завершено: {done}
      </h2>
    </div>
  );
};

export default AppHeader;
