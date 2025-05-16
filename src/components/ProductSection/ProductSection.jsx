import { useEffect, useState } from 'react'
import { faBox, faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import Product from '../Product/Product'
import Loading from '../Loading/Loading'
import NoItemsFound from '../NoItemsFound/NoItemsFound'
import Error from '../Error/Error'
import axios from 'axios'
import { Link } from 'react-router'
import './ProductSection.css'

export default function ProductSection({ subcategory, title }) {
    const [products, setProducts] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

    const productsSectionBySubcategory = async (subcategory, limit) => {
        setIsLoading(true)
        try {
            const { data } = await axios.get(`${URL}/products/categories/${subcategory}?limit=${limit}`)
            setProducts(data.products)
        } catch (error) {
            console.log(error)
            setIsError(error)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        productsSectionBySubcategory(subcategory, 8)
    }, [])

    if (isError && isError.status !== 404) return <Error message={'Error al obtener productos'} small={true}/>

    if (isError && isError.status === 404) return <NoItemsFound icon={faBoxOpen} message={'No se encontraron productos'}/>

    if (isLoading) return <Loading icon={faBox} small={true}/>

    return (
        <>  
            <div className="product-section-container">
                <div className="product-section-header">
                    <h1 className="product-section-title">{ title }</h1>
                    <Link to={`/categories/${subcategory}`} className='see-more'>Ver mas</Link>
                </div>
                <div className="products-container">
                    {
                        products.map(product => (
                            <Product key={ product._id } productData={product}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}