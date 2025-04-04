import { Route, Routes } from 'react-router'
import Main from './layouts/Main/Main'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import ProductDashboard from './pages/ProductDashboard/ProductDashboard'
import UserDashboard from './pages/UserDashboard/UserDashboard'
import Cart from './pages/Cart/Cart'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import './App.css'


function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={ <Main/> }>
            <Route index element={ <Home/> }/>
            <Route path='register' element={ <Register/> }/>
            <Route path='contact' element={ <Contact/> }/>
            <Route path='about' element={ <About/> }/>
            <Route path='admin/products' element={ <ProductDashboard/> }/>
            <Route path='admin/users' element={ <UserDashboard/> }/>
            <Route path='cart' element={ <Cart/> } />
            <Route path='product/:id' element={ <ProductDetails/> }/>
            <Route path='*' element={ <h1>404 Not Found</h1> }/>
          </Route>
        </Routes>
    </>
  )
}

export default App
