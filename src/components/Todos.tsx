import Todo from "../model/todo";
import TodoItem from "./TodoItem";
import React from "react";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
      <ul>
        {props.items.map((item) => (
            <TodoItem key={item.id} text={item.text} />
        ))}
      </ul>
  );
};

export default Todos;
