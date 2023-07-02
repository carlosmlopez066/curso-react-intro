import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreacteTodoButton';

const defaultTodos = [
  { text: "cortar cebolla", completed: true },
  { text: "correr", completed: false },
  { text: "caminar", completed: true },
  { text: "lalalala", completed: false },
]

function App() {
  return (
    <>
      <TodoCounter completed={5} total={10} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </>
  );
}



export default App;
