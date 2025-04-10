import { faWarning } from "@fortawesome/free-solid-svg-icons/faWarning"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { modal } from "../../utils/modalUtils"

export default function Register() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const URL = 'https://67cf1b76823da0212a81711b.mockapi.io'
    const navigate = useNavigate();

    async function addUser(formData) {
        const { user_name, email, password, birthday, country } = formData

        const newUser = {
            user_name,
            email,
            password, 
            birthday,
            country
        }
        
        try {
            const { data } = await axios.post(`${URL}/users`, newUser)
            console.log(data)
            navigate('/')
        } catch (error) {
            console.log(error)
            modal('error', 'Oops...', 'Parece que algo salio mal, intentelo mas tarde')
        }
    }
    
    return (
        <div className="form-container">
            <form className="form register-form" onSubmit={handleSubmit(addUser)} noValidate>
                <h1 className="form-title">Registro</h1>
                <div className="input-group">
                    <input {...register('user_name', {
                        required: 'Campo vacio',
                        minLength: {value: 3, message: 'Nombre debe tener minimo 3 caracteres'},
                        maxLength: {value: 50, message: 'Nombre debe tener maximo 50 caracteres'}
                    })} className="input-field" id="name" type="text" placeholder="Nombre Completo" autoFocus/>
                    { errors.user_name && <FontAwesomeIcon className='warning-icon' icon={faWarning} />}
                </div>
                { errors.user_name && <span className="error-msg">{errors.user_name.message}</span> }
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
                    <label htmlFor="birthdate" className="input-label">Fecha de nacimiento</label>
                </div>
                <div className="input-group">
                    <input {...register('birthday', {
                        required: 'Campo vacio'
                    })} className="input-field" id="birthdate" type="date" autoComplete="off"/>
                    { errors.birthday && <FontAwesomeIcon className='warning-icon' icon={faWarning} />}
                </div>
                { errors.birthday && <span className="error-msg">{errors.birthday.message}</span> }
                <div className="input-group">
                    <input {...register('country', {
                        required: 'Campo vacio'
                    })} className="input-field" id="country" type="text" placeholder="Pais" autoComplete="off"/>
                    { errors.country && <FontAwesomeIcon className='warning-icon' icon={faWarning} />}
                </div>
                { errors.country && <span className="error-msg">{errors.country.message}</span> }
                <div className="form-btn-container">
                    <button className="form-btn">Registrarse</button>
                </div>
            </form>
        </div>
    )
}