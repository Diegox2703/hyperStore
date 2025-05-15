import { useSearchParams } from "react-router"
import { useProducts } from "../../context/productContext"
import { useEffect } from "react"
import Product from "../../components/Product/Product"
import Loading from "../../components/Loading/Loading"
import NoItemsFound from "../../components/NoItemsFound/NoItemsFound"
import { faBox } from "@fortawesome/free-solid-svg-icons"

export default function SearchResult() {
  const { searchProduct, searchResult, isSearchLoading, searchError } = useProducts()
  const [ searchParams ] = useSearchParams()
  const search_query = searchParams.get('search_query')

  useEffect(() => {
    searchProduct(search_query)
  }, [search_query])

  return (
    <div className="search-result-container">
      <h3 className="search">Busqueda por {`"${search_query}"`}</h3>
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
      <div className="products-container">
        {
            searchResult.map(product => (
                <Product key={product._id} productData={product}/>
            ))
        }
      </div>
    </div>
  )
}
