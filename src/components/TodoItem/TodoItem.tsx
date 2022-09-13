import React from "react";
import "./TodoItem.scss";

const TodoItem: React.FC<{
  text: string;
  onDeleteTodo: (/* event: React.MouseEvent  optional */) => void;
}> = (props) => {
  return (
    <li className="item" onClick={props.onDeleteTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
