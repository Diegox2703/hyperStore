import { faWarning } from "@fortawesome/free-solid-svg-icons/faWarning"
import { Link } from 'react-router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { modal } from "../../utils/modalUtils"
import { faBolt } from "@fortawesome/free-solid-svg-icons"
import banner from '../../images/register-banner.png'
import { useAuth } from "../../context/authContext"

export default function Register() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const { setUser } = useAuth()
    const navigate = useNavigate();
    const URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

    const COUNTRIES = [
        "Estados Unidos",
        "Canadá",
        "México",
        "Guatemala",
        "Belice",
        "El Salvador",
        "Honduras",
        "Nicaragua",
        "Costa Rica",
        "Panamá",
        "Cuba",
        "República Dominicana",
        "Haití",
        "Jamaica",
        "Puerto Rico",
        "Colombia",
        "Venezuela",
        "Ecuador",
        "Perú",
        "Bolivia",
        "Chile",
        "Paraguay",
        "Uruguay",
        "Argentina",
        "Brasil",
        "España",
        "Francia",
        "Alemania",
        "Italia",
        "Portugal",
        "Países Bajos",
        "Reino Unido",
        "Suiza",
        "Suecia",
        "Noruega"
    ];

    async function addUser(formData) {
        const { username, email, password, birthday, country } = formData

        const newUser = {
            username,
            email,
            password, 
            birthday,
            country
        }
        
        try {
            const { data } = await axios.post(`${URL}/register`, newUser, {
                withCredentials: true
            })
            setUser(data.newUser)
            navigate('/')
        } catch (error) {
            console.log(error)
            modal(
                'error',
                'Oops...', 
                error.status === 400 ? error.response.data.message : 'Parece que algo salio mal, intentelo mas tarde'
            )
        }
    }
    
    return (
        <div className="register-container">
            <div className="banner-container">
                <img className="banner" src={ banner } alt="banner" />
            </div>
            <form className="register-form" onSubmit={handleSubmit(addUser)} noValidate>
                <div className="website-logo">
                    <div className="icon-container">
                        <FontAwesomeIcon className="icon" icon={faBolt}/>
                    </div>
                    <h1 className="name">HyperStore</h1>
                </div>
                <h2 className="register-title">Crea tu cuenta</h2>
                <div className="input-group">
                    <input {...register('username', {
                        required: 'Campo vacio',
                        minLength: {value: 3, message: 'Nombre debe tener minimo 3 caracteres'},
                        maxLength: {value: 50, message: 'Nombre debe tener maximo 50 caracteres'}
                    })} className="input-field" id="name" type="text" placeholder="Nombre Completo" autoFocus/>
                    { errors.username && <FontAwesomeIcon className='warning-icon' icon={faWarning} />}
                </div>
                { errors.username && <span className="error-msg">{errors.username.message}</span> }
                <div className="input-group">
                    <input {...register('email', {
                        required: 'Campo vacio',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Ingrese un correo válido",
                          }
                    })} className="input-field" id="email" type="email" placeholder="Correo Electronico"  autoComplete="off"/>
                    { errors.email && <FontAwesomeIcon className='warning-icon' icon={faWarning} />}
                </div>
                { errors.email && <span className="error-msg">{errors.email.message}</span> }
                <div className="input-group">
                    <input {...register('password', {
                        required: 'Campo vacio',
                        minLength: {value: 8, message: 'Contraseña debe tener minimo 8 caracteres'},
                        maxLength: {value: 50, message: 'Contraseña debe tener maximo 50 caracteres'}
                    })} className="input-field" id="password" type="password" placeholder="Contraseña" autoComplete="off"/>
                    { errors.password && <FontAwesomeIcon className='warning-icon' icon={faWarning} />}
                </div>
                { errors.password && <span className="error-msg">{errors.password.message}</span> }
                <div className="input-group">
                    <input {...register('repeat_password', {
                        required: 'Campo vacio',
                        validate: (value) => 
                            value === watch('password') || 'Las contraseñas no coinciden'
                    })} className="input-field" id="repeat-password" type="password" placeholder="Repetir Contraseña" autoComplete="off"/>
                    { errors.repeat_password && <FontAwesomeIcon className='warning-icon' icon={faWarning} />}
                </div>
                { errors.repeat_password && <span className="error-msg">{errors.repeat_password.message}</span> }
                <div className="input-label-container">
                    <label htmlFor="country" className="input-label">Pais</label>
                </div>
                <div className="input-group">
                    <select {...register('country', {
                        required: 'Campo vacio'
                    })} className="input-field" id="country">
                        <option value="">...</option>
                        {
                            COUNTRIES.map(country => (
                                <option defaultValue={ country }>{ country }</option>
                            ))
                        }
                    </select>
                { errors.country && <FontAwesomeIcon className='warning-icon' icon={faWarning} />}
                </div>
                { errors.country && <span className="error-msg">{errors.country.message}</span> }
                <div className="input-label-container">
                    <label htmlFor="birthdate" className="input-label">Fecha de nacimiento</label>
                </div>
                <div className="input-group">
                    <input {...register('birthday', {
                        required: 'Campo vacio'
                    })} className="input-field" id="birthdate" type="date" autoComplete="off"/>
                    { errors.birthday && <FontAwesomeIcon className='warning-icon' icon={faWarning} />}
                </div>
                { errors.birthday && <span className="error-msg">{errors.birthday.message}</span> }
                <div className="form-btn-container">
                    <button className="form-btn">Registrate</button> 
                </div>
                <h3>¿Ya tienes cuenta? <Link to={'/login'}>Inicia sesion</Link></h3>
            </form>
        </div>
    )
}