import React from "react";
import "./App.css";
import TodosContextProvider from "./store/todos-context";

//components
import Todos from "./components/Todos/Todos";
import NewTodo from "./components/NewTodo/NewTodo";

function App() {
  return (
    <TodosContextProvider>
      <div className="App">
        <NewTodo />
        <Todos />
      </div>
    </TodosContextProvider>
  );
}

export default App;
