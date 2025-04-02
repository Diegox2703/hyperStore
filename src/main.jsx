import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import ProductProvider from './context/productContext.jsx'
import App from './App.jsx'
import CartProvider from './context/cartContext.jsx'
import './index.css'
import './css/form.css'
import './css/modal.css'

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
