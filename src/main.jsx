import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import ProductProvider from './context/productContext.jsx'
import AuthProvider from './context/authContext.jsx'
import CartProvider from './context/cartContext.jsx'
import CategoryProvider from './context/categoryContext.jsx'
import OrderProvider from './context/orderContext.jsx'
import App from './App.jsx'
import './index.css'
import './css/form.css'
import './css/modal.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <OrderProvider>
          <CategoryProvider>
            <ProductProvider>
                <StrictMode>
                  <App />
                </StrictMode>
            </ProductProvider>
          </CategoryProvider>
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
)
