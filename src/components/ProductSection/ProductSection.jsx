import { useEffect } from 'react'
import { useProducts } from '../../context/productContext'
import { faBox, faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import Product from '../Product/Product'
import Loading from '../Loading/Loading'
import NoItemsFound from '../NoItemsFound/NoItemsFound'
import Error from '../Error/Error'
import './ProductSection.css'

export default function ProductSection({ title }) {
    const { getProducts, products, error } = useProducts()

    useEffect(() => {
        getProducts()
    }, [])

    if (error) return <Error message={'Error al intentar cargar los productos'} small={true}/>

    if (!products) return <Loading icon={ faBox } small={true}/>

    return (
        <>
            <h1 className="title">{ title }</h1>
            {
                products.length !== 0
                ?
                <section className="products-section">
                    {
                        products.map(product => (
                            <Product key={product._id} productData={product}/>
                        ))
                    }
                </section>
                :
                <NoItemsFound icon={faBoxOpen} message={'No hay productos'}/>
            }
        </>
    )
}