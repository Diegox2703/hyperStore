import Product from '../Product/Product'
import './ProductSection.css'

export default function ProductSection() {
    return (
        <>
            <h1 class="title-sections">Productos</h1>
            <section className="products-section">
                <Product/>
            </section>
        </>
    )
}