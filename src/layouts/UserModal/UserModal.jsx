import { faClose, faWarning } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useForm } from "react-hook-form"
import { modal } from "../../utils/modalUtils"
import { useEffect } from "react"
import axios from "axios"
import './UserModal.css'

export default function UserModal({ toggleUserModal, setUsers, users, editUser }) {
    const { register, handleSubmit, watch, formState: { errors }, setValue, reset } = useForm()
    const URL = 'https://67cf1b76823da0212a81711b.mockapi.io'
    
    useEffect(() => {
        if (editUser) {
            setValue('user_name', editUser.user_name)
            setValue('email', editUser.email)
            setValue('password', editUser.password)
            setValue('repeat_password', editUser.password)
            setValue('birthday', editUser.birthday)
            setValue('country', editUser.country)
        } else {
            reset()
        }
    }, [editUser])

    async function addUser(formData) {
        const { user_name, email, password, birthday, country } = formData
        const newUser = {
            user_name,
            email,
            password, 
            birthday,
            country
        }

        if (editUser) {
            try {
                const { data } = await axios.put(`${URL}/users/${editUser.id}`, newUser)
                const updatedUsers = users.map(user => user.id === data.id ? {...data} : user)

                setUsers(updatedUsers)
                modal('success', 'Usuario actualizado con exito!')
            } catch (error) {
                console.log(error)
                modal('error', 'Oops...', 'Parece que algo salio mal, intentelo mas tarde')
            }
        } else {            
            try {
                const { data } = await axios.post(`${URL}/users`, newUser)

                setUsers([...users, data])
                modal('success', 'Usuario subido con con exito!')
            } catch (error) {
                console.log(error)
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
                    <button className="form-btn"> {editUser ? 'Actualizar' : 'Crear' } </button>
                </div>
            </form>
        </div>
    )
}