import { Outlet, Route, Routes } from 'react-router'
import Header from '../Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../Footer/Footer'
import ProductModal from '../ProductModal/ProductModal'
import './Main.css'
import UserModal from '../UserModal/UserModal'

export default function Main() {
    return (
        <>  
            <Header/>
            <Routes>
                <Route path='/' element={ <Banner/> }/>
            </Routes>
            <ProductModal/>
            <main className="main">
                <div className="main-content">
                    <Outlet/>
                </div>
            </main>
            <Footer/>
        </>
    )
}