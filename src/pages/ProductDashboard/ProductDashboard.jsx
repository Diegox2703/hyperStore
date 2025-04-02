import { useProducts } from '../../context/productContext'
import { useEffect } from 'react'
import ProductRow from '../../components/ProductRow/ProductRow'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ProductDashboard.css'

export default function ProductDashboard() {
    const { toggleProductModal } = useProducts()
    const { getProducts, products } = useProducts()

    useEffect(() => {
        getProducts()
    }, [])

    if (!products) return <h1>Cargando...</h1>

    return (
        <div className="dashboard-container">
            <h1 className="title dashboard-title">Administrador de productos</h1>
            <p className="products-number">Hay un total de {products.length} productos.</p>
            <table className="main-dashboard">
                <thead className="dashboard-header">
                    <tr className="dashboard-row">
                        <th className="dashboard-cell">Imagen</th>
                        <th className="dashboard-cell">Producto</th>
                        <th className="dashboard-cell">Descripcion</th>
                        <th className="dashboard-cell">Categoria</th>
                        <th className="dashboard-cell">Precio</th>
                        <th className="dashboard-cell">Acciones</th>
                    </tr>
                </thead>
                <tbody className="dashboard-body">
                    {
                        products.map(product => (
                            <ProductRow key={product.id} productData={product}/>
                        ))
                    }
                </tbody>
            </table>
            <section class="add-product-btn-section">
                <div class="add-product-btn-container">
                    <button class="add-product-btn" onClick={() => toggleProductModal()}>
                        <FontAwesomeIcon icon={faAdd}/>
                    </button>
                </div>
            </section>
        </div>
    )
}