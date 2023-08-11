import React, { useState } from "react"
import "./TodoSearch.css"
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext);

  return (
    <div className="TodoSearch-container">
      <input
        placeholder="Salir a correr"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value)
        }
        }
      />

    </div>
  )
}

export { TodoSearch };