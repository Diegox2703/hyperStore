import './Register.css'

export default function Register() {
    return (
        <div className="form-container">
            <form className="form register-form">
                <h1 className="form-title">Registro</h1>
                <div className="input-group">
                    <input id="name" name="name" type="text" placeholder="Nombre Completo" minLength={10} maxLength={40} required autoComplete='off' autoFocus/>
                </div>
                <div className="input-group">
                    <input id="email" name="email" type="email" placeholder="Correo Electronico" maxLength={40} required autoComplete="off"/>
                </div>
                <div className="input-group">
                    <input id="password" name="password" type="password" placeholder="Contraseña" minLength={8} maxLength={30} required autoComplete="off"/>
                </div>
                <div className="input-group">
                    <input id="repeat-password" name="repeat-password" type="password" placeholder="Repetir Contraseña" minLength={8} maxLength={30} required autoComplete="off"/>
                </div>
                <div className="input-label-container">
                    <label htmlFor="birthdate" className="input-label">Fecha de nacimiento</label>
                </div>
                <div className="input-group">
                    <input id="birthdate" name="birthdate" type="date" required autoComplete="off"/>
                </div>
                <div className="input-group">
                    <input id="country" name="country" type="text" placeholder="Pais" maxLength={20} required autoComplete="off"/>
                </div>
                <div className="form-btn-container">
                    <button className="form-btn">Registrarse</button>
                </div>
            </form>
        </div>
    )
}