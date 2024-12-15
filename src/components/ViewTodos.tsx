import { useTodos } from '../store/Todos'

const ViewTodos = () => {
  const {todos, toggleTodoStatus,handleDeleteTodo} = useTodos();
  const filteredTodoList = todos
  return (
    <>  
      <ul>
        {filteredTodoList?.map((todo) => {
          return (
            <li key={todo.id}>
              <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed}
                onChange={() => toggleTodoStatus(todo.id)}
              />
              <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
              {
                todo.completed && (
                  <button type='button' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                )
              }
            </li>
          )
        } )}
      </ul>
    </>
  )
}

export default ViewTodos
