import "./EmptyTodos.css"
import React, { useState } from "react"
function EmptyTodos() {
  return (
    <div className="EmptyTodo-Container">
      <p className="emptyTodo-p1">Por ahora no tienes TO-DOs</p>
      <p className="emptyTodo-p2">Crea el primero</p>
    </div>
  )
}

export { EmptyTodos };