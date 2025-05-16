import { Navigate } from "react-router"
import { useAuth } from "../../context/authContext"

export default function PublicRoute({ children }) {
  const { user } = useAuth()
  
  return !user ? children : <Navigate to={'/'}/>
}
