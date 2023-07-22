import "./CreacteTodoButton.css"
function CreateTodoButton() {
  return (
    <button
      onClick={
        (event) => {
          console.log("le diste click al boton")
          console.log(event)
          console.log(event.target)
        }
      }
    >+</button>
  );
}

export { CreateTodoButton };