import "./TodoItem.css"
import { FaCheck } from 'react-icons/fa'
import { FaRegTimesCircle } from 'react-icons/fa'
function TodoItem(props) {
  return (

    <li className="li-container">
      <span
        className={`icon icon-check ${props.
          completed && "icon-check--active"}`}
        onClick={props.onCompleted}
      >
        <FaCheck />
      </span>
      {/* <span
        className={`icon icon-check ${props.
          completed && "icon-check--active"}`}
        onClick={props.onCompleted}
      >
        V
      </span> */}
      <p className={`contentTodo ${props.completed && "contentTodo--completed"}`}>{props.text}</p>
      {/* <span
        className=" icon icon--delete-item"
        onClick={props.onDelete}
      >
        X
      </span> */}

      <span
        className=" icon icon--delete-item"
        onClick={props.onDelete}
      >
        <FaRegTimesCircle />
      </span>
    </li>

  );
}

export { TodoItem };