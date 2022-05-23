import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodo, addTodo, removeTodo } from "./todoSlice";

export interface TodoItemProps {
  todo: {
    id: number;
    title: string;
  };
  onDelete: (id: number) => void;
}

function TodoItem({ todo, onDelete }: TodoItemProps) {
  const onClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onDelete(todo.id);
  };

  return (
    <li>
      <span>{todo.title}</span>
      <span onClick={onClick}>Delete</span>
    </li>
  );
}

export default function Todo() {
  const dispatch = useDispatch();
  const { todos } = useSelector(selectTodo);
  const [todo, setTodo] = useState({ id: 1, title: "" });

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setTodo({ ...todo, title: value });
  };

  const onClick = () => {
    dispatch(addTodo(todo));
    setTodo({ id: todo.id + 1, title: "" });
  };

  const onDelete = (id: number) => {
    dispatch(removeTodo({ id }));
  };

  return (
    <div>
      <input type="text" onChange={onChange} value={todo.title} />
      <button onClick={onClick}>Add todo</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}
