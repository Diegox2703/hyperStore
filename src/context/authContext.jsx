import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { modal } from '../utils/modalUtils';
import axios from 'axios';

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState( JSON.parse(localStorage.getItem('user')) )
    const URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

    useEffect(() => {
        user ? localStorage.setItem('user', JSON.stringify(user))
             : localStorage.removeItem('user')
    }, [user])

    const logIn = async (data) => {
        try {
          const response = await axios.post(`${URL}/login`, data, {
            withCredentials: true
          })
          const { user } = response.data

          setUser(user)
          navigate('/')
        } catch (error) {
          console.log(error)
          modal(
            'error', 
            'Oops...',
            error.status === 401 ? error.response.data.message : 'Parece que algo salio mal, intentelo mas tarde'
          )
        }
      }

    const logOut = async () => {
      try {
        await axios.post(`${URL}/logout`, {
          withCredentials: true
        })
        setUser(null)
      } catch (error) {
        console.log(error)
        modal('error', 'Opps', 'Error al cerrar sesion')
      }
    }

    return (
        <AuthContext.Provider value={{ logIn, logOut, setUser, user }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider