import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './NoItemsFound.css'

export default function NoItemsFound({ icon, message, dashboardStyle, big }) {
    return (
        <div className={`no-item-container ${dashboardStyle && 'dashboard-style'} ${big && 'big-container'}`}>
            <FontAwesomeIcon className='no-item-icon' icon={icon}/>
            <h1 className="no-item-msg">{ message }</h1>
        </div>
    )
}