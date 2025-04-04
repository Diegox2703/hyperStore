import { Outlet, Route, Routes, useLocation } from 'react-router'
import Header from '../Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../Footer/Footer'
import ProductModal from '../ProductModal/ProductModal'
import './Main.css'

export default function Main() {
    const { pathname } = useLocation()

    window.scrollTo(0, 0)

    return (
        <>  
            <Header/>
            { pathname === '/' && <Banner/> }
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