import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../../context/cartContext'
import { Link } from 'react-router'

export default function Product( { productData } ) {
    const { addProductToCart } = useCart()
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
                <Link to={`/product/${id}`} className="buy-btn">
                    <p className="price">${ price }</p>
                </Link>
            </section>
            <button className="cart-btn" title='Agregar al carrito' onClick={() => addProductToCart(productData)}>
                <FontAwesomeIcon className='cart-icon' icon={faCartPlus}/>
            </button>
        </article>
    )
}