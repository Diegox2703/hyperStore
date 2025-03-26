import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

export default function Product( { productData } ) {
    const { id, product_image, product_name, price } = productData

    return (
        <article key={ id } className="product-card">
            <section className="product-image">
                <img src={ product_image } alt="product-image" className="image"/>
            </section>
            <section className="product-title-section">
                <h2 className="product-title" title={ product_name }>{ product_name }</h2>
            </section>
            <section className="buy-btn-section">
                <a href="#" className="buy-btn">
                    <p className="price">${ price }</p>
                </a>
            </section>
            <a href="#" className="cart-btn" title='Agregar al carrito'>
                <FontAwesomeIcon className='cart-icon' icon={faCartPlus}/>
            </a>
        </article>
    )
}