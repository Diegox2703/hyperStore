import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCloud, faTruck, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-regular-svg-icons'
import { NavLink } from 'react-router'
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
                <NavLink to={'/'} className="page-logo">
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
                </NavLink>
                <nav className="header-nav">
                    <ul className="nav-list">
                        <li className={`nav-item ${(isActive) => isActive && 'active'}`}><NavLink to={'/'}>Inicio</NavLink></li>
                        <li className="nav-item"><NavLink to={'/register'}>Registro</NavLink></li>
                        <li className="nav-item"><NavLink to={'/contact'}>Contacto</NavLink></li>
                        <li className="nav-item"><NavLink to={'/about'}>Acerca de nosotros</NavLink></li>
                        <li className="nav-item"><NavLink to={'/admin'}>Admin productos</NavLink></li>
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