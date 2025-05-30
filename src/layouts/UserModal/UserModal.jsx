import { faClose, faWarning } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useForm } from "react-hook-form"
import { modal } from "../../utils/modalUtils"
import { useEffect } from "react"
import axios from "axios"
import { useAuth } from "../../context/authContext"
import './UserModal.css'

export default function UserModal({ toggleUserModal, setUsers, users, editUser }) {
    const { register, handleSubmit, watch, formState: { errors }, setValue, reset } = useForm()
    const { setUser } = useAuth()
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

    useEffect(() => {
        if (editUser) {
            setValue('username', editUser.username)
            setValue('email', editUser.email)
            setValue('password', editUser.password)
            setValue('repeat_password', editUser.password)
            setValue('birthday', editUser.birthday.split('T')[0])
            setValue('country', editUser.country)
        } else {
            reset()
        }
    }, [editUser])

    async function addUser(formData) {
        const { username, email, password, birthday, country } = formData
        const newUser = {
            username,
            email,
            password, 
            birthday,
            country
        }

        if (editUser) {
            try {
                const { data } = await axios.put(`${URL}/users/${editUser._id}`, newUser, {
                    withCredentials: true
                })
                const updatedUsers = users.map(user => user._id === data.updatedUser._id ? {...data.updatedUser} : user)

                setUsers(updatedUsers)
                modal('success', 'Usuario actualizado con exito!')
            } catch (error) {
                if (error.status === 401) return setUser(null)
                console.log(error)
                modal('error', 'Oops...', 'Parece que algo salio mal, intentelo mas tarde')
            }
        } else {            
            try {
                const { data } = await axios.post(`${URL}/users`, newUser, {
                    withCredentials: true
                })

                setUsers([...users, data.newUser])
                modal('success', 'Usuario subido con con exito!')
            } catch (error) {
                console.log(error)
                if (error.status === 401) return setUser(null)
                if (error.status === 400) return modal('error', 'Oops...', error.response.data.message )
                modal('error', 'Oops...', 'Parece que algo salio mal, intentelo mas tarde')
            }
        }
        toggleUserModal()
    }

    return (
        <div className="modal-overlay" onClick={() => toggleUserModal()}>
            <form className="form modal-register-form" 
                  onSubmit={handleSubmit(addUser)} 
                  onClick={(e) => e.stopPropagation()}
                  noValidate
            >
                <div className="modal-header">
                    <h2 className='modal-title'>{editUser ? 'Actualizar usuario' : 'Nuevo usuario'}</h2>
                    <div className="close-modal-btn" onClick={() => toggleUserModal()}>
                        <FontAwesomeIcon className='close-modal-icon' icon={faClose}/>
                    </div>
                </div>
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
                {
                    !editUser &&
                    <>
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
                    </>
                }
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
                    <button className="form-btn"> {editUser ? 'Actualizar' : 'Crear' } </button>
                </div>
            </form>
        </div>
    )
}