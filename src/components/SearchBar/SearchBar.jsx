import './SearchBar.css'

export default function SearchBar({ placeholder, searchFn }) {
  return (
    <div className='searchbar-container'>
      <div className="input-group searchbar-content">
        <input type="text" 
               className="input-field searchbar" 
               placeholder={ placeholder } 
               onChange={(event) => searchFn(event.target.value)}
        />
      </div>
    </div>
  )
}
