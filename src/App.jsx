import { Route, Routes } from 'react-router'
import Main from './layouts/Main/Main'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Dashboard from './pages/Dashboard/Dashboard'
import './App.css'
import './form.css'


function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={ <Main/> }>
            <Route index element={ <Home/> }/>
            <Route path='register' element={ <Register/> }/>
            <Route path='contact' element={ <Contact/> }/>
            <Route path='about' element={ <About/> }/>
            <Route path='admin' element={ <Dashboard/> }/>
            <Route path='*' element={ <h1>404 Not Found</h1> }/>
          </Route>
        </Routes>
    </>
  )
}

export default App
