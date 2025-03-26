import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useProducts } from '../../context/productContext'

export default function DashboardProduct( { productData } ) {
    const { updateProduct, deleteProduct } = useProducts()
    const { id, product_image, product_name, description, price } = productData

    return (
        <tr key={ id } className="dashboard-row">
            <td className="dashboard-cell">
                <div className="product-image">
                    <img className="image" src={ product_image } alt="image"/>
                </div>
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
                        <button className="delete-button" onClick={() => deleteProduct(id)}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                    </div>
                </div>
            </td>
        </tr>
    )
}