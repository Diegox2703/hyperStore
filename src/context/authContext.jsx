import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { modal } from '../utils/modalUtils';
import axios from 'axios';

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState( JSON.parse(localStorage.getItem('user')) )
    const [token, setToken] = useState( localStorage.getItem('token') )
    const URL = 'http://localhost:3000/api'

    useEffect(() => {
        user ? localStorage.setItem('user', JSON.stringify(user))
             : localStorage.removeItem('user')

        token ? localStorage.setItem('token', token)
              : localStorage.removeItem('token')
    }, [user, token])

    const logIn = async (data) => {
        try {
          const response = await axios.post(`${URL}/login`, data)
          const { user, token } = response.data

          setUser(user)
          setToken(token)
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

    const logOut = () => {
        setUser(null)
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{ logIn, logOut, user, token }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider