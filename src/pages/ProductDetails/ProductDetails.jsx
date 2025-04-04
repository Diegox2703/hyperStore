import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faBox, faStar } from '@fortawesome/free-solid-svg-icons'
import { useProducts } from '../../context/productContext'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { useCart } from '../../context/cartContext'
import ProductSection from '../../components/ProductSection/ProductSection'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
import './ProductDetails.css'

export default function ProductDetails() {
    const { getProduct, product, productError } = useProducts()
    const { addProductToCart } = useCart()
    const { id } = useParams()

    useEffect(() => {
        getProduct(id)
    }, [id])

    if (productError) return <Error message={'No se encontro el producto'}/>

    if (!product) return <Loading icon={faBox}/>

    return (
        <>
            <div className="product-details-container">
                <section className="product-image-section">
                    <img className='product-image' src={ product.product_image } alt="product-image" />
                </section>
                <section className="product-details-section">
                    <div className="product-category-container">
                        <span className="product-category">{ product.category }</span>
                        <div className="bookmark-btn">
                            <FontAwesomeIcon icon={faBookmark}/>
                        </div>
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
                        <button className="product-buy-btn">
                            <p className="product-buy-btn-text">Comprar</p>
                        </button>
                        <button className="product-cart-btn" onClick={() => addProductToCart(product)}>
                            <p className="product-cart-text">Agregar al carrito</p>
                        </button>
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
            <ProductSection title={'Mas Productos'}/>
        </>
    )
}