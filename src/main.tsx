import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx' 
import { TodosProvider } from './store/Todos'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TodosProvider>
        <App />
      </TodosProvider>
    </BrowserRouter>
  </StrictMode>,
)
