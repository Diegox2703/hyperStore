import { useProducts } from '../../context/productContext'
import { useEffect } from 'react'
import DashboardProduct from '../../components/DashboardProduct/DashboardProduct'
import './Dashboard.css'

export default function Dashboard() {
    const { getProducts, products } = useProducts()

    useEffect(() => {
        getProducts()
    }, [])

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
                        <th className="dashboard-cell">Precio</th>
                        <th className="dashboard-cell">Acciones</th>
                    </tr>
                </thead>
                <tbody className="dashboard-body">
                    {
                        products.length !== 0
                        ?
                        products.map(product => (
                            <DashboardProduct key={product.id} productData={product}/>
                        ))
                        :
                        <h1>No hay productos</h1>
                    }
                </tbody>
            </table>
        </div>
    )
}