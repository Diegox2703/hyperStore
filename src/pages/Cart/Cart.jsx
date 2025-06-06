import { useEffect } from 'react'
import CartProduct from '../../components/CartProduct/CartProduct'
import { useCart } from '../../context/cartContext'
import Loading from '../../components/Loading/Loading'
import NoItemFound from '../../components/NoItemsFound/NoItemsFound'
import { faCartShopping, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { useOrder } from '../../context/orderContext'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Cart() {
    const { getCartProducts, cart, count, total } = useCart()
    const { createOrder, isCreateOrderLoading } = useOrder()

    useEffect(() => {
        getCartProducts()
    }, [])

   if (!cart) return <Loading icon={faCartShopping}/>
    
    return (
        <>
            {
                cart.length !== 0
                ?
                <div className="cart-container">
                    <section className="cart-products-section">
                        {
                            cart.map(product => (
                                <CartProduct key={ product._id } productData={product}/>
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
                            <div className="buy-btn-container">
                                <button disabled={ isCreateOrderLoading } className="buy-btn" onClick={() => createOrder()}>
                                    {
                                        isCreateOrderLoading
                                        ?
                                        <FontAwesomeIcon icon={faCircleNotch} spin/>
                                        :
                                        <span className="buy-btn-text">Continuar compra</span>
                                    }
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
                :
                <NoItemFound icon={faCartShopping} big={true} message={'No hay productos en el carrito'}/>
            }
        </>
    )
}