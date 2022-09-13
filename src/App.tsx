import React, { useState } from "react";
import "./App.css";
import TodosContextProvider from "./store/todos-context";

//components
import Todos from "./components/Todos/Todos";
import NewTodo from "./components/NewTodo/NewTodo";

// Types
export type Todo = {
  text: string;
  id: string;
};

function App() {
  return (
    <div className="App">
      <h1>Basic Todo APP</h1>
      <NewTodo onAddTodo={AddTodoHandler}></NewTodo>
      <Todos items={todos} onDeleteTodo={DeleteTodoHandler}></Todos>
    </div>
  );
}

export default App;
