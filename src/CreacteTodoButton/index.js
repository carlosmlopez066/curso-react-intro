import React from "react";
import { TodoContext } from "../TodoContext";
import "./CreacteTodoButton.css"
function CreateTodoButton() {
  const {
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)
  return (
    <button
      onClick={
        () => {
          console.log("le diste click al boton")
          if (openModal) {
            setOpenModal(false)
          } else {
            setOpenModal(true)
          }
        }
      }
    >+</button>
  );
}

export { CreateTodoButton };