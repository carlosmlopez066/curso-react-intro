import React from "react"
import './TodoCounter.css';
function TodoCounter({ total, completed }) {
  const totalTodos = total
  const totalCompletedTodos = completed
  if (totalTodos == totalCompletedTodos) {
    return (
      <h1>Felicidades, completaste todos los TO-DOs!</h1>
    )
  }
  else {
    return (
      <h1>
        Has completado <span>{completed}</span> de
        <span>{total}</span> TODOS
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