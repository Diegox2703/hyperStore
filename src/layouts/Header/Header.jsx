import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCartShopping, faCloud, faTruck, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-regular-svg-icons'
import { NavLink } from 'react-router'
import { useEffect, useRef } from 'react'
import { useCart } from '../../context/cartContext'
import './Header.css'

export default function Header() {
    const { count, getCartProducts } = useCart()
    const burgerRef = useRef(null)

    function closeSideMenu() {
        burgerRef.current.checked = false
    }

    useEffect(() => {
        getCartProducts()
    }, [])

    return (
        <header className="main-header">
            <div className="header-content">
                <input ref={burgerRef} type="checkbox" id="burger-input"/>
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
                        <li className="nav-item" onClick={() => closeSideMenu()}><NavLink to={'/'} className={({isActive}) => isActive ? 'active' : ''}>Inicio</NavLink></li>
                        <li className="nav-item" onClick={() => closeSideMenu()}><NavLink to={'/register'}>Registro</NavLink></li>
                        <li className="nav-item" onClick={() => closeSideMenu()}><NavLink to={'/contact'}>Contacto</NavLink></li>
                        <li className="nav-item" onClick={() => closeSideMenu()}><NavLink to={'/about'}>Acerca de nosotros</NavLink></li>
                        <button className="admin-button">
                            <p className="admin-button-text">
                                Admin
                                <FontAwesomeIcon icon={faCaretDown}/>
                            </p>
                            <ul className="dropdown-menu">
                                <li className="nav-item" onClick={() => closeSideMenu()}><NavLink to={'/admin/products'}>Admin productos</NavLink></li>
                                <li className="nav-item" onClick={() => closeSideMenu()}><NavLink to={'/admin/users'}>Admin usuarios</NavLink></li>
                            </ul>
                        </button>
                    </ul>
                </nav>
                <section className="user-section">
                    <NavLink to={'/cart'} className="cart">
                        <FontAwesomeIcon className='cart-icon' icon={faCartShopping}/>
                        { count > 0 && <span className='item-count'>{ count }</span>}
                    </NavLink>
                    <div className="user">
                        <FontAwesomeIcon className='user-icon' icon={faUserAlt}/>
                    </div>
                </section>
            </div>
        </header>
    )
}