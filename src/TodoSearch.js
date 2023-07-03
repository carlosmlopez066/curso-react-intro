import React, { useState } from "react"
import "./TodoSearch.css"
function TodoSearch() {

  const [searchValue, setSearchValue] = React.useState("");

  console.log('usuario:' + searchValue)

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