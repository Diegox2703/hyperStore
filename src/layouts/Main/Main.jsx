import { Route, Routes } from 'react-router'
import Home from '../../pages/Home'
import './Main.css'

export default function Main() {
    return (
        <>  
            <Routes><Route path='/' element={ <Home/> }/></Routes>
            <main className="main">
                <div className="main-content">
                    <Routes>
                        {/* <Route path='/home' element={}/> */}
                    </Routes>
                </div>
            </main>
        </>
    )
}