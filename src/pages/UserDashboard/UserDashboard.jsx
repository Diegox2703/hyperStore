import UserRow from "../../components/UserRow/UserRow";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { modal } from "../../utils/modalUtils";
import UserModal from "../../layouts/UserModal/UserModal";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Loading from "../../components/Loading/Loading";
import axios from "axios";
import NoItemsFound from "../../components/NoItemsFound/NoItemsFound";
import Error from "../../components/Error/Error";
import { useAuth } from "../../context/authContext";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function UserDashboard() {
    const { setUser } = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const [error, setError] = useState(false)
    const [editUser, setEditUser] = useState(null)
    const [users, setUsers] = useState(null)
    const URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

    useEffect(() => {
        if (!isOpen) setEditUser(null)
    }, [isOpen])

    useEffect(() => {
        getUsers()
    }, [])

    async function getUsers(user = '') {
        try {
            const { data } = await axios.get(`${URL}/users?username=${user}`, {
                withCredentials: true
            })
            setUsers(data.users) 
        } catch (error) {
            if (error.status === 404) return setUsers([])
            if (error.status === 401) return setUser(null)
            setError(true)
        }
    }

    function deleteUser(id) {
        Swal.fire({
            title: "¿Estas seguro?",
            text: "¡No podras revertir esto!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: "#d33",
            cancelButtonText: 'Cancelar',
            confirmButtonText: "<div style='color: rgb(255, 255, 137)'>Si</div>",
            confirmButtonColor: 'rgb(0, 88, 117)',
            color: 'rgb(0, 88, 117)',
            customClass: {
                popup: 'custom-popup'
            }
          }).then(async (result) => {
            try {
                if (result.isConfirmed) {
                  await axios.delete(`${URL}/users/${id}`, {
                    withCredentials: true
                  })
    
                  const newUsers = users.filter(user => user._id !== id)
                  setUsers(newUsers)
                    
                  modal('success', 'Eliminado', 'El usuario fue eliminado con exito')
                }
            } catch (error) {
                if (error.status === 401) return setUser(null)
                console.log(error)
                modal('error', 'Oops...', 'Parece que algo salio mal, intentelo mas tarde')
            }
          });
    }

    function updateUser(user) {
        setIsOpen(!isOpen)
        setEditUser(user)
    }

    function toggleUserModal() {
        setIsOpen(!isOpen)
    }

    if (error) return <Error message={'Error al intentar cargar los usuarios'}/>

    if (!users) return <Loading icon={faUser}/>
    
    return (
        <>
            { 
                isOpen && 
                <UserModal 
                    toggleUserModal={ toggleUserModal }
                    setUsers={ setUsers }
                    users={ users }
                    setEditUser={ setEditUser }
                    editUser={ editUser }
                    isOpen={ isOpen }
                /> 
            }
            <div className="dashboard-container">
                <h1 className="title dashboard-title">Administrador de usuarios</h1>
                <p className="users-number">Hay un total de { users.length } usuarios.</p>
                <div className="dashboard-container-header">
                    <section className="add-user-btn-section">
                        <SearchBar placeholder={'Buscar usuario'} searchFn={getUsers}/>
                        <div className="add-product-btn-container">
                            <button className="add-product-btn" onClick={() => toggleUserModal()}>
                                <FontAwesomeIcon icon={faAdd}/>
                            </button>
                        </div>
                    </section>
                </div>
                <div className="dashboard-content">
                    <table className="main-dashboard">
                        <thead className="dashboard-header">
                            <tr className="dashboard-row">
                                <th className="dashboard-cell">Nombre</th>
                                <th className="dashboard-cell">Correo</th>
                                <th className="dashboard-cell">Fecha Nacimiento</th>
                                <th className="dashboard-cell">Pais</th>
                                <th className="dashboard-cell">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="dashboard-body">
                            {
                                users.map(user => (
                                    <UserRow 
                                        key={ user._id } 
                                        userData={ user }
                                        deleteUser={ deleteUser }
                                        updateUser={ updateUser }
                                    />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                { users.length === 0 && <NoItemsFound icon={faUser} message={'No hay usuarios'}/> }
            </div>
        </>
    )
}