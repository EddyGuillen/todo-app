
export const TodoItem = ({todo , onDeleteTodo, onToggleTodo}) => {
  return (
    <li className="list-group-item bg-dark border border-0 border-bottom rounded-0">
        <div className="row">
          <div className={`text-light col ${(todo.done) ? 'text-decoration-line-through text-white-50' : ''}`}>
            <h3 className={`text-${(todo.done) ? 'secondary':'warning'}`} >{todo.name}</h3>
            <span> {todo.description} </span>
          </div>

          <div className="col d-flex justify-content-end align-items-center">
            <button 
              onClick={ () => onToggleTodo(todo.id) } 
              className="btn btn-outline-success me-3"
            >Complete</button>

            <button 
              onClick={ () => onDeleteTodo(todo.id) } 
              className="btn btn-outline-warning"
            >Delete</button>
          </div>

        </div>
      </li>
    )
}
