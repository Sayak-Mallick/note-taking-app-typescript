import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx' 
import { TodosProvider } from './store/Todos'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </StrictMode>,
)
