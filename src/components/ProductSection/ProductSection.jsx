import { useEffect } from 'react'
import { useProducts } from '../../context/productContext'
import Product from '../Product/Product'
import './ProductSection.css'

export default function ProductSection() {
    const { getProducts, products } = useProducts()

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <h1 className="title">Productos</h1>
            <section className="products-section">
                {
                    products.length !== 0
                    ?
                    products.map(product => (
                        <Product key={product.id} productData={product}/>
                    ))
                    :
                    <h1>No hay productos</h1>
                }
            </section>
        </>
    )
}