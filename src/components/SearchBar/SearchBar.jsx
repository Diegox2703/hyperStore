import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useProducts } from '../../context/productContext'
import './SearchBar.css'

export default function SearchBar({ placeholder, searchFn, closeBtn }) {
  const { toggleSearch } = useProducts()

  return (
    <div className='searchbar-container'>
      <div className="searchbar-content">
        <div className="input-group">
          <input type="text" 
                className="input-field searchbar" 
                placeholder={ placeholder } 
                autoFocus
                onChange={(event) => searchFn(event.target.value)}
          />
        </div>
        { 
          closeBtn
          &&
          <div className="close-btn-container">
            <button className="close-btn" onClick={() => toggleSearch()}>
              <FontAwesomeIcon icon={faClose}/>
            </button>
          </div>
        }
      </div>
    </div>
  )
}
