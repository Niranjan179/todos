
import React from 'react';

function TodoItem({ todo, onDelete, onEdit }) {
  return (
    <li>
      {todo.text}
      <button onClick={() => onEdit(todo.id, todo.text)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;