import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  // Here you have 2 Todo, 'Todo 1' and 'Todo 2'.
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2']);
  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Complete</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
