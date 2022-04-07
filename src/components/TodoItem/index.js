// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoId, title, onDeleteFunction} = props

  const onClickButton = () => {
    onDeleteFunction(todoId)
  }

  return (
    <li className="st-each-todo-container">
      <p className="st-todo-title">{title}</p>
      <button
        className="st-delete-button"
        type="button"
        onClick={onClickButton}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
