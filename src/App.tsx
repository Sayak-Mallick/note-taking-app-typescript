import AddToDo from './components/AddToDo'
import ViewTodos from './components/ViewTodos'

const App = () => {
  return (
    <>
      <main>
        <h1>
          Todo List Application : Efficient Task Management
        </h1>
        <AddToDo />
        <ViewTodos />
      </main>
    </>
  )
}

export default App
