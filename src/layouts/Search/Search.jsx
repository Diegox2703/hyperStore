import { Link } from 'react-router'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useProducts } from '../../context/productContext'
import Product from '../../components/Product/Product'
import Error from '../../components/Error/Error'
import { useEffect } from 'react'
import NoItemsFound from '../../components/NoItemsFound/NoItemsFound'
import { faBox } from '@fortawesome/free-solid-svg-icons'
import Loading from '../../components/Loading/Loading'
import './Search.css'

export default function Search() {
  const { searchProduct, searchResult, searchError, isSearchOpen, isSearchLoading, search, toggleSearch } = useProducts()

  useEffect(() => {
    if (isSearchOpen) document.documentElement.style.overflow='hidden'

    return () => document.documentElement.style.overflow='auto'
  }, [isSearchOpen])

  if (!isSearchOpen) return

  return (
    <div className="search-container">
      <SearchBar placeholder={'Buscar productos'} searchFn={searchProduct} closeBtn={true}/>
      <div className="search-content">
        <div className="search-results-container">
            {
              searchResult.length !== 0 &&
              <Link onClick={toggleSearch} to={`/products/search/?search_query=${search}`} className='more-results'>Ver todos los { searchResult?.length } productos</Link>
            }
            <div className="search-results">
                {
                  searchResult.length !== 0 
                  &&
                  searchResult.slice(0, 8).map(product => (
                    <Product key={product._id} productData={product}/>
                  ))
                }
            </div>
            {
              isSearchLoading
              &&
              <Loading icon={faBox}/>
            }
            {
              searchError.status === 404 
              &&
              <NoItemsFound big={true} icon={faBox} message={'No se encontraron productos'}/>
            }
            {
              searchError && searchError.status !== 404 
              &&
              <Error big={true} icon={faBox} message={'No se encontraron productos'}/>
            }
        </div>
      </div>
    </div>
  )
}
