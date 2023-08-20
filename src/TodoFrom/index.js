import React from "react"
import "./TodoFrom.css"
import { TodoContext } from "../TodoContext";

function TodoFrom() {
  const {
    addTodo,
    setOpenModal,

  } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false);
  }
  const onCancel = () => {
    setOpenModal(false);
  }
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe Tu nuevo TO-DO</label>
      <textarea
        placeholder="Salir a correr..."
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoFrom-buttonContainer">
        <button
          type="button"
          className="TodoFrom-button--cancel"
          onClick={onCancel}
        >cancelar</button>

        <button
          type="submit"
          className="TodoFrom-button--add"
        >Añadir</button>

      </div>
    </form>
  );
}

export { TodoFrom };