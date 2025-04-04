import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import './Error.css'

export default function Error({ message, small }) {
    return (
        <div className={`error-container ${small && 'small-container'}`}>
            <FontAwesomeIcon className='error-icon' icon={faCircleXmark}/>
            <h1 className="error-msg">{ message }</h1>
        </div>
    )
}