import React, { useContext, useState } from "react";
import type { Todo } from "../App";

// type
type contextType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<{
  //this is type definition
  contextType;
}>({
  // those are just initializing empty array and functions but not types
  items: [],
  addtodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const AddTodoHandler = (text: string) => {
    const id = text;
    const newTodo = { text, id };
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const DeleteTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: contextType = {
    // type of this contextValue must be the same with TodosContext -> in line 6-9
    items: todos,
    addtodo: AddTodoHandler,
    removeTodo: RemoveTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};


export default TodosContextProvider;