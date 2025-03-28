import { useEffect } from 'react'
import CartProduct from '../../components/CartProduct/CartProduct'
import { useCart } from '../../context/cartContext'
import './Cart.css'

export default function Cart() {
    const { getCartProducts, cart, count, total } = useCart()

    useEffect(() => {
        getCartProducts()
    }, [])


   if (cart.length === 0) return <h1>404</h1>
    
    return (
        <div className="cart-container">
            <section className="cart-products-section">
                {
                    cart.map(product => (
                        <CartProduct key={ product.id } productData={product}/>
                    ))
                }
            </section>
            <section className="order-summary-section">
                <div className="order-summary">
                    <h1 className='order-summary-title'>Resumen</h1>
                    <div className="subtotal-container">
                        <p className="subtotal-text">Subtotal({ count })</p>
                        <p className="subtotal">${ total }</p>
                    </div>
                    <div className="shipping-container">
                        <p className="shipping-text">Envio</p>
                        <p className="shipping">Gratis</p>
                    </div>
                </div>
                <div className="order-summary-total-container">
                    <div className="order-summary-total">
                        <p className="total-text">Total</p>
                        <p className="total">${ total }</p>
                    </div>
                    <button className="buy-btn">
                        <p className="buy-btn-text">Continuar compra</p>
                    </button>
                </div>
            </section>
        </div>
    )
}