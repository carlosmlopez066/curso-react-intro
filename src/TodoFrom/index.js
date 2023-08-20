import React from "react"
import "./TodoFrom.css"

function TodoFrom() {
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
    }}>
      <label>Escribe Tu nuevo TO-DO</label>
      <textarea
        placeholder="Salir a correr..."
      />
      <div className="TodoFrom-buttonContainer">
        <button
          type="submit"
          className="TodoFrom-button--cancel"
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