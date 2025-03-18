import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshakeAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                <section className="footer-section page-logo-section">
                    <div className="page-logo">
                        <div className="logo">
                            <FontAwesomeIcon icon={faHandshakeAlt}/>
                        </div>
                        <h1 className="page-name">HyperStore</h1>
                    </div>
                    <div className="copyright-container">
                        <p className="copyright">Copyright © 2024 HyperStore Ecommerce</p>
                    </div>
                </section>
                <section className="footer-section social-media-section">
                    <h2 className="social-media-title">Redes</h2>
                    <div className="social-media-container">
                        <div className="social-media instagram-logo">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </div>
                        <div className="social-media facebook-logo">
                            <FontAwesomeIcon icon={faFacebook}/>
                        </div>
                        <div className="social-media tiktok-logo">
                            <FontAwesomeIcon icon={faTiktok}/>
                        </div>
                        <div className="social-media youtube-logo">
                            <FontAwesomeIcon icon={faYoutube}/>
                        </div>
                        <div className="social-media linkedin-logo">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </div>
                    </div>
                </section>
                <section className="footer-section extra-info-section">
                    <section className="navigation-section">
                        <h2 className="navigation-title">Navegacion</h2>
                        <ul className="nav-list">
                            <li className="nav-item"><a href="./pages/register-page.html">Registro</a></li>
                            <li className="nav-item"><a href="./pages/contact-page.html">Contacto</a></li>
                            <li className="nav-item"><a href="./pages/about-page.html">Acerca de nosotros</a></li>
                            <li className="nav-item"><a href="./pages/dashboard-page.html">Dashboard</a></li>
                        </ul>
                    </section>
                    <section className="contact-section">
                        <h2 className="contact-title">Contacto</h2>
                        <div className="contact-number">
                            <p className="number">750789</p>
                        </div>
                        <div className="contact-address">
                            <p className="address">hypestore@gmail.com</p>
                        </div>
                    </section>
                </section>
            </div>
        </footer>
    )
}