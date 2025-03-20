import './Contact.css'

export default function Contact() {
    return (
        <div className="form-container">
            <form className="form contact-form">
                <section className="contact-section">
                    <h1 className="form-title">Formulario De Contacto</h1>
                    <div className="input-group">
                        <input id="name" name="name" type="text" placeholder="Nombre Completo" minLength={10} maxLength={40} autoComplete="off" autoFocus required/>
                    </div>
                    <div className="input-group">
                        <input id="email" name="email" type="email" placeholder="Correo Electronico" maxLength={40} autoComplete="off" required/>
                    </div>
                    <div className="input-group">
                        <textarea id="message" name="message" placeholder="Mensaje"  maxLength={600} required></textarea>
                    </div>
                    <div className="form-btn-container">
                        <button className="form-btn">Contactar</button>
                    </div>
                </section>
                <section className="map-section">
                     <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.0224541149025!2d-74.04774461165414!3d4.7621915217556765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f859394bb333f%3A0x414694fb3359b449!2sCentro%20Comercial%20Santaf%C3%A9%2C%20Cl.%20185%20%2345-3%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1742495581113!5m2!1ses!2sco" height={450} style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section>
            </form>
        </div>
    )
}