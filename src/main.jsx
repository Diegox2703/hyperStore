import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import ProductProvider from './context/productContext.jsx'
import './index.css'
import App from './App.jsx'
import CartProvider from './context/cartContext.jsx'

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <ProductProvider>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </ProductProvider>
  </CartProvider>
)
