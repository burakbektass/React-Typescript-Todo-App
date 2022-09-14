import React, { useState } from "react";
import "./App.css";
import TodosContextProvider from "./store/todos-context";

//components
import Todos from "./components/Todos/Todos";
import NewTodo from "./components/NewTodo/NewTodo";

function App() {
  return (
    <TodosContextProvider>
      <h1>Basic Todo APP</h1>
      <NewTodo ></NewTodo>
      <Todos ></Todos>
    </TodosContextProvider>
  );
}

export default App;
