import AddToDo from './components/AddToDo'
import Navbar from './components/Navbar'
import ViewTodos from './components/ViewTodos'

const App = () => {
  return (
    <>
      <main>
        <h1>Todo List Application : Efficient Task Management</h1>
        <Navbar />
        <AddToDo />
        <ViewTodos />
      </main>
    </>
  )
}

export default App
