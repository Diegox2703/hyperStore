import { Navigate } from "react-router"
import { useAuth } from "../../context/authContext"

export default function PrivateRoute({ children }) {
  const { user } = useAuth()

  return user ? children : <Navigate to={'/login'}/>
}
