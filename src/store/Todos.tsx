import { createContext, ReactNode, useContext, useState } from 'react';

export type TodosProviderProps = { // here we are defining the type of the props that the TodosProvider component will accept.
  children: ReactNode;
}

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
}

export type TodoContext = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  toggleTodoStatus: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TodosContext = createContext<TodoContext | null>(null); // here we are creating a context object and exporting it. We will use this context object to pass the state and the dispatch function to the child components.

export const TodosProvider = ({children}: TodosProviderProps) => {

  const [todos, setTodos] = useState<Todo[]>([]); // here we are defining the state using the useState hook. The state will hold the list of todos.

  const handleAddTodo = (task: string) => { // here we are defining a function that will be used to add a new todo to the list of todos.
    setTodos((prev) => {
      const newTodos:Todo[] = [
        {
          id:Math.random().toString(),
          task:task,
          completed:false,
          createdAt:new Date(),
        },
        ...prev
      ]
      return newTodos
    })
  }

  // here we are defining a function that will be used to toggle the status of a todo. If the todo is completed, it will be marked as incomplete and vice versa.
  const toggleTodoStatus = (id: string) => { 
   setTodos((prev) => {
    const newTodos = prev.map((todos) => {
      if(todos.id === id) {
        return {...todos,completed: !todos.completed}
      }
      return todos
    })
    return newTodos
   }) 
  }

  const handleDeleteTodo = (id:string) => {
    setTodos((prev) => {
      const newTodos = prev.filter((todo) => todo.id !== id);
      return newTodos;
    })
  }

  return (
    <TodosContext.Provider value={{todos, handleAddTodo, toggleTodoStatus, handleDeleteTodo}}>
      {children}
    </TodosContext.Provider>
  )
}

// consumer 

// eslint-disable-next-line react-refresh/only-export-components
export const useTodos = () => {
  const todosConsumer = useContext(TodosContext);
  if(!todosConsumer){
    throw new Error("useTodos must be used within a TodosProvider")
  }
  return todosConsumer;
}
