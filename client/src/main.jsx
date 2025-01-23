import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { UserContextProvider } from './Context/UserContext.jsx'
import { CourseContextProvider } from './Context/CourseContext.jsx'


export const server = " https://19b0-2401-4900-6272-6a5d-781d-9c35-b053-47bf.ngrok-free.app"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <CourseContextProvider>
        <App />
      </CourseContextProvider>
    </UserContextProvider>
  </StrictMode>,
)
