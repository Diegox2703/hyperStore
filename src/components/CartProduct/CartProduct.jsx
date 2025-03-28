import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../../context/cartContext'

export default function CartProduct({ productData }) {
    const { removeProductFromCart, increaseQuantity, decreaseQuantity } = useCart()
    const { id, product_name, product_image, total_product, quantity } = productData

    return (
        <div key={ id } className="cart-product">
            <div className="cart-product-image">
                <img className='image' src={ product_image } alt="product-image" />
            </div>
            <div className="cart-product-details">
                <div className="cart-product-name">{ product_name }</div>
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
                <button className="remove-btn" onClick={() => removeProductFromCart(id)}>
                    <FontAwesomeIcon className='remove-btn-icon' icon={faClose}/>
                </button>
                <div className="cart-product-total">
                    <p className="total">${ total_product }</p>
                </div>
            </div>
        </div>
    )
}