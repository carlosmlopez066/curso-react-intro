import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { ErrorTodos } from '../ErrorTodos'
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreacteTodoButton';
import { TodoContext } from '../TodoContext';

function AppUI({ }) {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoContext.Consumer>
        {({
          loading,
          error,
          searchedTodos,
          completeTodo,
          deleteTodo
        }) => (
          <TodoList>

            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}


            {error && <ErrorTodos />}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onCompleted={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>
      <CreateTodoButton />

    </>
  )
}

export { AppUI };