import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../../context/cartContext'
import { Link } from 'react-router'
import { useProducts } from '../../context/productContext'
import './Product.css'

export default function Product( { productData } ) {
    const { addProductToCart } = useCart()
    const { toggleSearch, isSearchOpen } = useProducts()
    const { _id, image, product_name, price } = productData

    const IMAGE_URL = import.meta.env.VITE_IMAGE_URL

    return (
        <article key={ _id } className="product-card">
            <section className="product-image">
                <img src={ `${IMAGE_URL}/${image}` } alt="product-image" className="image"/>
            </section>
            <section className="product-title-section">
                <h2 className="product-title" title={ product_name }>{ product_name }</h2>
            </section>
            <section className="buy-btn-section">
                <Link to={`/product/${_id}`} className="buy-btn"  {...(isSearchOpen && { onClick: toggleSearch }) }>
                    <p className="price">${ price }</p>
                </Link>
            </section>
            <button className="cart-btn" title='Agregar al carrito' onClick={() => addProductToCart(productData)}>
                <FontAwesomeIcon className='cart-icon' icon={faCartPlus}/>
            </button>
        </article>
    )
}