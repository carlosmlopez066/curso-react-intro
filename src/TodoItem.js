import "./TodoItem.css"
function TodoItem(props) {
  return (

    <li className="li-container">
      <span className={`icon icon-check ${props.completed && "icon-check--active"}`}>V</span>
      <p className={`contentTodo ${props.completed && "contentTodo--completed"}`}>{props.text}</p>
      <span className=" icon icon--delete-item">X</span>

    </li>

  );
}

export { TodoItem };