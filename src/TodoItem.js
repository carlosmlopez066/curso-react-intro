import "./TodoItem.css"
function TodoItem(props) {
  return (

    <li className="li-container">
      <span
        className={`icon icon-check ${props.
          completed && "icon-check--active"}`}
        onClick={props.onCompleted}
      >
        V
      </span>
      <p className={`contentTodo ${props.completed && "contentTodo--completed"}`}>{props.text}</p>
      <span
        className=" icon icon--delete-item"
        onClick={props.onDelete}
      >
        X
      </span>

    </li>

  );
}

export { TodoItem };