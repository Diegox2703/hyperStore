import { useParams } from "react-router"
import { useCategory } from "../../context/categoryContext"
import { useEffect } from "react"
import Product from "../../components/Product/Product"
import NoItemsFound from "../../components/NoItemsFound/NoItemsFound"
import { faBox } from "@fortawesome/free-solid-svg-icons"
import Error from "../../components/Error/Error"
import Loading from "../../components/Loading/Loading"

export default function Products() {
  const { 
    getProductsBySubcategories, 
    productsFound, 
    isError, 
    isProductsLoading, 
  } = useCategory()
  const { subcategory } = useParams()

  useEffect(() => {
    getProductsBySubcategories(subcategory)
  }, [subcategory])

  if (isError) return <Error message={ isError.status === 404 ? isError.response.data.message : 'Error al encontrar productos' }/>

  if (isProductsLoading) return <Loading icon={faBox}/>

  return (
    <>
        <h2 className="category-section">{ `${productsFound.category}/${productsFound.subcategory}` }</h2>
        <div className="products-container">
            {
                productsFound.products?.length !== 0
                &&
                productsFound.products?.map(product => (
                    <Product key={product._id} productData={product}/>
                ))
            }
        </div>
        { productsFound.products?.length === 0 && <NoItemsFound big={true} icon={faBox} message={'No se encontraron productos'}/>}
    </>
  )
}
