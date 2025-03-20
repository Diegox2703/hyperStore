import Product from '../Product/Product'
import './ProductSection.css'

export default function ProductSection() {
    return (
        <>
            <h1 className="title-sections">Productos</h1>
            <section className="products-section">
                <Product/>
            </section>
        </>
    )
}