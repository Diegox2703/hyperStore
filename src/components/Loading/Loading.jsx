import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Loading.css'

export default function Loading({ icon, small }) {
    return (
        <div className={`loading-icon-container ${ small && 'small-container' }`}>
            <FontAwesomeIcon className='loading-icon' icon={icon} bounce/>
        </div>
    )
}