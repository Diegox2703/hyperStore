import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCloud, faTruck, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-regular-svg-icons'
import './Header.css'

export default function Header() {
    return (
        <header className="main-header">
            <div className="header-content">
                <input type="checkbox" id="burger-input"/>
                <label htmlFor="burger-input" className="burger-container">
                    <div className="burger-icon">
                        <div className="burger"></div>
                    </div>
                </label>
                <a href="./index.html" className="page-logo">
                    <div className="logo">
                        <div className="clouds">
                            <div className="cloud cloud-1">
                                <FontAwesomeIcon icon={faCloud}/>
                            </div>
                            <div className="cloud cloud-2">
                                <FontAwesomeIcon icon={faCloud}/>
                            </div>
                        </div>
                        <div className="speed-effect">
                            <div className="line line-1"></div>
                            <div className="line line-2"></div>
                        </div>
                        <div className="truck-icon">
                            <FontAwesomeIcon className='truck' icon={faTruck}/>
                        </div>
                        <div className="handshake-icon">
                            <FontAwesomeIcon icon={faHandshake}/>
                        </div>
                    </div>
                    <h1 className="page-name">HyperStore</h1>
                </a>
                <nav className="header-nav">
                    <ul className="nav-list">
                        <li className="nav-item active"><a href="/">Inicio</a></li>
                        <li className="nav-item"><a href="./pages/register-page.html">Registro</a></li>
                        <li className="nav-item"><a href="./pages/contact-page.html">Contacto</a></li>
                        <li className="nav-item"><a href="./pages/about-page.html">Acerca de nosotros</a></li>
                        <li className="nav-item"><a href="./pages/dashboard-page.html">Admin productos</a></li>
                    </ul>
                </nav>
                <section className="user-section">
                    <div className="cart">
                        <FontAwesomeIcon className='cart-icon' icon={faCartShopping}/>
                    </div>
                    <div className="user">
                        <FontAwesomeIcon className='user-icon' icon={faUserAlt}/>
                    </div>
                </section>
            </div>
        </header>
    )
}