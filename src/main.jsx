import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App'
import { ThemeProvider } from './context/ThemeContext'
import { BrowserRouter } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext'
import { ToastProvider } from './context/ToastContext'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <FavoritesProvider>
          <ToastProvider>
            <App />
          </ToastProvider>
        </FavoritesProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
