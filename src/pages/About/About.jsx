import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import avatar from '../../images/avatar.jpg'
import './About.css'

export default function About() {
    return (
        <div className="about-container">
            <div className="team-members-title-container">
                <h1 className="title">Miembros del equipo</h1>
            </div>
            <article className="team-member-container">
                <div className="team-member-content">
                    <section className="team-member-avatar-section">
                        <div className="avatar-container">
                            <img className="avatar" src={avatar} alt="avatar"/>
                        </div>
                    </section>
                    <section className="member-info-section">
                        <div className="member-name">
                            <h2 className="name">Diego Sarmiento</h2>
                        </div>
                        <div className="member-description">
                            <p className="description">
                                Artista y desarrollador Full-Stack en progreso, con pasión por aprender y crear aplicaciones web completas.</p>
                        </div>
                        <div className="member-social-media">
                            <div className="social-media-icon">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </div>
                            <div className="social-media-icon">
                                <FontAwesomeIcon icon={faTiktok}/>
                            </div>
                            <div className="social-media-icon">
                                <FontAwesomeIcon icon={faYoutube}/>
                            </div>
                            <div className="social-media-icon">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </div>
                        </div>
                    </section>
                </div>
            </article>
            <article className="about-us-container">
                <h1 className="title">Nuestra misión</h1>
                <p className="about-us-description">Bienvenido a HyperStore - Tu tienda en línea todo en uno. Aquí encontrarás una amplia variedad de productos, desde la última tecnología y dispositivos electrónicos hasta ropa de moda, accesorios, y electrodomésticos para el hogar. <br/> Nuestro objetivo es ofrecerte una experiencia de compra fácil, rápida y segura, con productos de alta calidad a precios competitivos. Ya sea que estés buscando renovar tu closet, actualizar tu equipo de trabajo, o darle un toque nuevo a tu hogar, en HyperStore tenemos todo lo que necesitas. ¡Descubre, compra y disfruta en un solo lugar!.</p>
            </article>
        </div>
    )
}