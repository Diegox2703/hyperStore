import { Navigate } from 'react-router'
import { useAuth } from '../../context/authContext'

export default function AdminGuard( {children} ) {
  const { user } = useAuth()

  return user?.role === 'admin' ? children : <Navigate to={'/'}/>
}
