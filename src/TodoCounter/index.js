import React from "react"
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";
function TodoCounter() {
  const {
    totalTodos,
    completedTodos,
  } = React.useContext(TodoContext);

  if (totalTodos == completedTodos) {
    return (
      <h1>Felicidades, completaste todos los TO-DOs!</h1>
    )
  }
  else {
    return (
      <h1>
        Has completado <span>{completedTodos}</span> de
        <span>{totalTodos}</span> TODOS
      </h1>
    )
  }
  // return (
  //   <h1>
  //     Has completado <span>{completed}</span> de
  //     <span>{total}</span> TODOS
  //   </h1>
  // )
}

export { TodoCounter };