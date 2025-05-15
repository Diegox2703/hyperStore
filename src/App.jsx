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
import Error from './components/Error/Error'
import Login from './pages/Login/Login'
import AdminGuard from './services/guard/AdminGuard'
import Categories from './pages/Categories/Categories'
import Products from './pages/Products/Products'
import Orders from './pages/Orders/Orders'
import SearchResult from './pages/SearchResult/SearchResult'
import './App.css'


function App() {
  return (
    <>
        <Routes>
          <Route path='/login' element={ <Login/> }/>
          <Route path='/register' element={ <Register/> }/>
          <Route path='/' element={ <Main/> }>
            <Route index element={ <Home/> }/>
            <Route path='categories' element={ <Categories/> }/>
            <Route path='categories/:subcategory' element={ <Products/> }/>
            <Route path='contact' element={ <Contact/> }/>
            <Route path='about' element={ <About/> }/>
            <Route path='admin/products' element={
              <AdminGuard>
                <ProductDashboard/>
              </AdminGuard>
            }/>
            <Route path='admin/users' element={ 
              <AdminGuard>
                <UserDashboard/>
              </AdminGuard>
             }/>
            <Route path='cart' element={ <Cart/> } />
            <Route path='product/:id' element={ <ProductDetails/> }/>
            <Route path='products/search' element={ <SearchResult/> }/>
            <Route path='orders' element={ <Orders/> }/>
            <Route path='*' element={ <Error message={'No se encontro la pagina'}/> }/>
          </Route>
        </Routes>
    </>
  )
}

export default App
