import { Outlet, useLocation } from 'react-router'
import Header from '../Header/Header'
import Banner from '../../components/Banner/Banner'
import Footer from '../Footer/Footer'
import ProductModal from '../ProductModal/ProductModal'
import Search from '../Search/Search'
import CategoryModal from '../CategoryModal/CategoryModal'
import './Main.css'
import CategoryBanner from '../CategoryBanner/CategoryBanner'

export default function Main() {
    const { pathname } = useLocation()

    window.scrollTo(0, 0)

    return (
        <>  
            <Header/>
            { pathname === '/' && <Banner/> }
            <CategoryBanner/>
            <ProductModal/>
            <CategoryModal/>
            <Search/>
            <main className="main">
                <div className="main-content">
                    <Outlet/>
                </div>
            </main>
            <Footer/>
        </>
    )
}