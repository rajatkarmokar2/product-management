import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ProductProvider } from './contexts/ProductContext.jsx'
import { ThemeProvider } from '@mui/material'
import { theme } from './constants/muiTheme.js'

createRoot( document.getElementById( 'root' ) ).render(
  <StrictMode>
    <ProductProvider>
      <ThemeProvider theme={ theme }>
        <App />
      </ThemeProvider>
    </ProductProvider>
  </StrictMode>,
)
