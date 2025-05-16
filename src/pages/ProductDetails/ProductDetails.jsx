import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faBox, faCircleNotch, faStar } from '@fortawesome/free-solid-svg-icons'
import { useProducts } from '../../context/productContext'
import { Link, useParams } from 'react-router'
import { useEffect } from 'react'
import { useCart } from '../../context/cartContext'
import ProductSection from '../../components/ProductSection/ProductSection'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
import { useOrder } from '../../context/orderContext'
import './ProductDetails.css'

export default function ProductDetails() {
    const { getProduct, product, productError } = useProducts()
    const { addProductToCart } = useCart()
    const { isCreateOrderLoading, createOrderWithoutCart } = useOrder()
    const { id } = useParams()

    const IMAGE_URL = import.meta.env.VITE_IMAGE_URL || 'http://localhost:3000'

    useEffect(() => {
        getProduct(id)
    }, [id])

    if (productError) return <Error message={'No se encontro el producto'}/>

    if (!product) return <Loading icon={faBox}/>

    return (
        <>
            <div className="product-details-container">
                <section className="product-image-section">
                    <img className='product-image' src={ `${IMAGE_URL}/${product.image}` } alt="product-image" />
                </section>
                <section className="product-details-section">
                    <div className="product-category-container">
                        {
                            product.subcategory?.subcategory && product.category?.category
                            &&
                            <Link to={`/categories/${product.subcategory.subcategory}`} className="product-category">{ `${product.category.category}/${product.subcategory.subcategory}` }</Link>
                        }
                    </div>
                    <div className="product-name-container">
                        <h1 className="product-name">{ product.product_name }</h1>
                    </div>
                    <div className="product-rating-container">
                        <div className="star-icon-container">
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <div className="star-icon-container">
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <div className="star-icon-container">
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <div className="star-icon-container">
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <div className="star-icon-container">
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                    </div>
                    <div className="product-price-container">
                        <span className='product-price'>${ product.price }</span>
                    </div>
                    <div className="product-action-btns">
                        <div className="product-buy-btn-container">
                            <button disabled={ isCreateOrderLoading } className="product-buy-btn" onClick={() => createOrderWithoutCart(product)}>
                                {
                                    isCreateOrderLoading
                                    ?
                                    <FontAwesomeIcon icon={faCircleNotch} spin/>
                                    :
                                    <span>Comprar</span>
                                }
                            </button>
                        </div>
                        <div className="product-cart-btn-container">
                            <button className="product-cart-btn" onClick={() => addProductToCart(product)}>
                                <span>Agregar al carrito</span>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
            <div className="product-description-container">
                <section className="product-description-title-section">
                    <h1 className='title product-description-title'>Descripcion del producto</h1>
                </section>
                <section className="product-description-section">
                    <p className="product-description">{ product.description }</p>
                </section>
            </div>
            <ProductSection title={'Productos relacionados'} subcategory={product.subcategory.subcategory}/>
        </>
    )
}