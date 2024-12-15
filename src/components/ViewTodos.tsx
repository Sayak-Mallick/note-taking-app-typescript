import { useTodos } from '../store/Todos'
import { useSearchParams } from 'react-router-dom';

const ViewTodos = () => {
  const {todos, toggleTodoStatus,handleDeleteTodo} = useTodos();
  const [searchParams] = useSearchParams();
  const todosData = searchParams.get('todos');
  let filteredTodoList = todos;

  if(todosData === 'active') {
    filteredTodoList = todos.filter((todo) => !todo.completed);
  }

  if(todosData === 'completed') {
    filteredTodoList = todos.filter((todo) => todo.completed);
  }

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
