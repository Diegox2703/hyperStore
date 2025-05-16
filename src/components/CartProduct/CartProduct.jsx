import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../../context/cartContext'
import { Link } from 'react-router'

export default function CartProduct({ productData }) {
    const { removeProductFromCart, increaseQuantity, decreaseQuantity } = useCart()
    const { _id, product_name, image, total_product, quantity } = productData

    const IMAGE_URL = import.meta.env.VITE_IMAGE_URL

    return (
        <div key={ _id } className="cart-product">
            <div className="cart-product-image">
                <img className='image' src={ `${IMAGE_URL}/${image}` } alt="product-image" />
            </div>
            <div className="cart-product-details">
                <Link to={`/product/${_id}`} className="cart-product-name" title={ product_name }>{ product_name }</Link>
                <div className="cart-product-quantity">
                    <button className="decrease-btn" onClick={() => decreaseQuantity(productData)}>
                        <FontAwesomeIcon className='decrease-btn-icon' icon={faMinus}/>
                    </button>
                    <div className="quantity">{ quantity }</div>
                    <button className="increase-btn" onClick={() => increaseQuantity(productData)}>
                        <FontAwesomeIcon className='increase-btn-icon' icon={faPlus}/>
                    </button>
                </div>
            </div>
            <div className="cart-product-actions">
                <button className="remove-btn" onClick={() => removeProductFromCart(_id)}>
                    <FontAwesomeIcon className='remove-btn-icon' icon={faClose}/>
                </button>
                <div className="cart-product-total">
                    <p className="total">${ total_product }</p>
                </div>
            </div>
        </div>
    )
}