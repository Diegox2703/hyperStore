import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useProducts } from '../../context/productContext'
import { Link } from 'react-router'

export default function ProductRow( { productData } ) {
    const { updateProduct, deleteProduct } = useProducts()
    const { _id, image, product_name, description, category, subcategory, price } = productData

    const IMAGE_URL = import.meta.env.VITE_IMAGE_URL || 'http://localhost:3000'

    return (
        <tr key={ _id } className="dashboard-row">
            <td className="dashboard-cell">
                <Link to={`/product/${_id}`} className="product-image">
                    <img className="image" src={ `${IMAGE_URL}/${image}` } alt="image"/>
                </Link>
            </td>
            <td className="dashboard-cell">
                <div className="product-name">
                    <p className="product">{ product_name }</p>
                </div>
            </td>
            <td className="dashboard-cell">
                <div className="product-description">
                    <p className="description">{ description }</p>
                </div>
            </td>
            <td className="dashboard-cell">
                <div className="product-category">
                    {
                        subcategory?.subcategory && category?.category
                        ?
                        <Link to={`/categories/${subcategory.subcategory}`} className="category">{ `${category.category}/${subcategory.subcategory}` }</Link>
                        :
                        <p>No hay categoria</p>
                    }
                </div>
            </td>
            <td className="dashboard-cell">
                <div className="product-price">
                    <p className="price">${ price }</p>
                </div>
            </td>
            <td className="dashboard-cell">
                <div className="action-buttons">
                    <div className="edit-button-container">
                        <button className="edit-button" onClick={() => updateProduct(productData)}>
                            <FontAwesomeIcon icon={faPencil}/>
                        </button>
                    </div>
                    <div className="delete-button-container">
                        <button className="delete-button" onClick={() => deleteProduct(_id, image)}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                    </div>
                </div>
            </td>
        </tr>
    )
}