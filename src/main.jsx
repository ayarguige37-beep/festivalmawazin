import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Section } from './componnets/Section.jsx'


createRoot(document.getElementById('root')).render(

  <StrictMode>

      <App />
      <Section />
    
  </StrictMode>,
)
