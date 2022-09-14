import React, { useContext } from "react";
import "./Todos.scss";
import type { Todo } from "../../store/todos-context";
import { TodosContext } from "../../store/todos-context";
//components
import TodoItem from "../TodoItem/TodoItem";

const Todos: React.FC = () => {
  // context kullandığımız için props ve kendi type belirleme kısmına gerek kalmadı
  const todosCtx = useContext(TodosContext);
  return (
    <ul className="todos">
      {todosCtx.items.map((item:Todo) => (
        <TodoItem
          key={item.id}
          onDeleteTodo={todosCtx.deleteTodo.bind(null, item.id)}
          text={item.text}
        ></TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
