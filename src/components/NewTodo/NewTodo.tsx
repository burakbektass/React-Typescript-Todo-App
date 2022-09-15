import React, { useRef,useContext} from "react";
import {TodosContext} from '../../store/todos-context';
import "./NewTodo.scss";

const NewTodo: React.FC = () => {
  
  const todosCtx = useContext(TodosContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText: string | any = inputRef.current?.value;
    if (enteredText.trim().length === 0) {
      // throw new Error
      return;
    }
  
    todosCtx.addTodo(enteredText);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <h1>NewTodo</h1>
      <label className="label" htmlFor="text">
        Todo text
      </label>
      <input className="input" type="text" id="text" ref={inputRef} />
      <button className="button">Add To do</button>
    </form>
  );
};

export default NewTodo;
