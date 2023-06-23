import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { mainTheme } from './styles/theme'
import App from './App'
import { LoginProvider } from './contexts/loginContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <ThemeProvider theme={mainTheme}>
          <App />
        </ThemeProvider>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>
)