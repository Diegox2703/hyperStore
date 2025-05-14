import { faHandshake, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router'
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";
import banner from '../../images/banner.png'

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { logIn } = useAuth()

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={(handleSubmit(logIn))}>
        <div className="website-logo">
            <div className="icon-container">
                <FontAwesomeIcon className="icon" icon={faHandshake}/>
            </div>
            <h1 className="name">HyperStore</h1>
        </div>
        <h2 className="login-title">Inicia sesion en tu cuenta</h2>
        <div className="input-group">
            <input {...register('username', {
              required: 'Campo requerido'
            })} type="text" className="input-field" placeholder="Usuario"/>
            { errors.username && <FontAwesomeIcon className='warning-icon' icon={faWarning} />}
        </div>
        { errors.username && <span className="error-msg">{errors.username.message}</span> }
        <div className="input-group">
            <input {...register('password', {
              required: 'Campo requerido'
            })} type="password" className="input-field" placeholder="Contraseña"/>
            { errors.password && <FontAwesomeIcon className='warning-icon' icon={faWarning} />}
        </div>
        { errors.password && <span className="error-msg">{errors.password.message}</span> }
        <div className="form-btn-container">
            <button className="form-btn">Inicia sesion</button> 
        </div>
        <h3>¿No tienes cuenta? <Link to={'/register'}>Registrate</Link></h3>
      </form>
      <div className="banner-container">
        <img className="banner" src={ banner } alt="banner" />
      </div>
    </div>
  )
}
