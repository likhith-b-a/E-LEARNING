import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { UserContextProvider } from './Context/UserContext.jsx'
import { CourseContextProvider } from './Context/CourseContext.jsx'


export const server = "https://e17c-2401-4900-6272-6a5d-2da0-9b08-39ea-8425.ngrok-free.app"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <CourseContextProvider>
        <App />
      </CourseContextProvider>
    </UserContextProvider>
  </StrictMode>,
)
