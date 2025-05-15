import { useEffect } from 'react'
import { useOrder } from '../../context/orderContext'
import Error from '../../components/Error/Error'
import Loading from '../../components/Loading/Loading'
import NoItemsFound from '../../components/NoItemsFound/NoItemsFound'
import { faList } from '@fortawesome/free-solid-svg-icons'
import './Orders.css'

export default function Orders() {
  const { getOrders, orders, isOrdersLoading, isOrderError } = useOrder()

  useEffect(() => {
    getOrders()
  }, [])

  if (isOrderError) return <Error message={'Error al obtener ordenes'}/>

  if (isOrdersLoading) return <Loading icon={faList}/>

  console.log(orders)

  return (
    <>
        {
            orders.length !== 0
            ?
            orders.map(order => (
                <div key={ order._id } className='orders-container'>
                    <section className="status-section">
                        <div className="status-point"></div>
                        <span className="status">{ order.status }</span>
                    </section>
                    <section className="orders-section">
                        {
                            order.products.map(product => (
                                    product?.product
                                    &&
                                    <article key={ product._id } className="order">
                                        <section className="order-img-section">
                                            <img src={ `http://localhost:3000/${ product.product?.image }` } alt="order-img" className="order-img" />
                                        </section>
                                        <section className="order-details-section">
                                            <h3 className="product-name">{ product.product.product_name }</h3>
                                            <span className="product-description">{ product.product.description }</span>
                                            <span className="product-quantity">{ product.quantity } unidades</span>
                                        </section>
                                        <section className="order-price-section">
                                            <h3 className="product-price">${ product.price }</h3>
                                        </section>
                                    </article>
                            ))
                        }
                    </section>
                    <section className="order-total-section">
                        <h3 className='order-total'>Total: ${ order.total }</h3>
                    </section>
                </div>
            ))
            :
            <NoItemsFound big={true} icon={faList} message={'No hay ordenes'}/>
        }
    </>
  )
}
