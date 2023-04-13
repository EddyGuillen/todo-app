import { useTodos } from "../hooks/useTodos"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

export const TodoApp = () => {

  const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo, } = useTodos();

  return (
    <>
        <h1 
        className="text-center text-light pt-5 mb-5" 
        >My Todos: { todosCount } <small>pendientes: {pendingTodosCount} </small></h1>

        <TodoAdd onNewTodo={handleNewTodo}/>        

        <div className="container bg-dark mt-5">
          <TodoList 
            todos={todos} 
            onDeleteTodo={handleDeleteTodo} 
            onToggleTodo={handleToggleTodo} 
          />
        </div>
    
    </>
  )
}
