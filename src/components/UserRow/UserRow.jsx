import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function UserRow({ userData, deleteUser, updateUser }) {
    const { _id, username, email, birthday, country } = userData

    return (
        <tr key={ _id } className="dashboard-row">
            <td className="dashboard-cell">
                <div className="user-name">
                    <p className="name">{ username }</p>
                </div>
            </td>
            <td className="dashboard-cell">
                <div className="user-email">
                    <p className="email">{ email }</p>
                </div>
            </td>
            <td className="dashboard-cell">
                <div className="user-birthday">
                    <p className="birthday">{ birthday.split('T')[0] }</p>
                </div>
            </td>
            <td className="dashboard-cell">
                <div className="user-country">
                    <p className="country">{ country }</p>
                </div>
            </td>
            <td className="dashboard-cell">
                <div className="action-buttons">
                    <div className="edit-button-container">
                        <button className="edit-button" onClick={() => updateUser(userData)}>
                            <FontAwesomeIcon icon={faPencil}/>
                        </button>
                    </div>
                    <div className="delete-button-container">
                        <button className="delete-button" onClick={() => deleteUser(_id)}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                    </div>
                </div>
            </td>
        </tr>
    )
}