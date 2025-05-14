import { Link } from 'react-router'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useProducts } from '../../context/productContext'
import Product from '../../components/Product/Product'
import Error from '../../components/Error/Error'
import { useEffect } from 'react'
import './Search.css'

export default function Search() {
  const { searchProduct, searchResult, searchError, isSearchOpen } = useProducts()

  useEffect(() => {
    if (isSearchOpen) document.documentElement.style.overflow='hidden'

    return () => document.documentElement.style.overflow='auto'
  }, [isSearchOpen])

  if (!isSearchOpen) return

  return (
    <div className="search-container">
      <SearchBar placeholder={'Buscar productos'} searchFn={searchProduct}/>
      <div className="search-content">
        <div className="recommendations">
            <h2 className="recommendations-title">
                Lo mas buscado
            </h2>
            <Link className="recommendation">Tecnologia</Link>
            <Link className="recommendation">Muebles</Link>
            <Link className="recommendation">Electrodomesticos</Link>
            <Link className="recommendation">Ropa</Link>
            <Link className="recommendation">Carros</Link>
            <Link className="recommendation">Deporte</Link>
        </div>
        <div className="search-results-container">
            {
              searchResult.length !== 0 &&
              <Link className='more-results'>Ver todos los { searchResult?.length } productos</Link>
            }
            <div className="search-results">
                {
                  searchError && <Error message={'Error al encontrar los productos'} small={true}/>
                }
                {
                    searchResult.length !== 0 
                    &&
                    searchResult.map(product => (
                        <Product key={product._id} productData={product}/>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  )
}
