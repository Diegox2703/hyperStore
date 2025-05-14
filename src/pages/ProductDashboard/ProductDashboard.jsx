import { useProducts } from '../../context/productContext'
import { useEffect } from 'react'
import ProductRow from '../../components/ProductRow/ProductRow'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox } from '@fortawesome/free-solid-svg-icons'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import Loading from '../../components/Loading/Loading'
import NoItemsFound from '../../components/NoItemsFound/NoItemsFound'
import Error from '../../components/Error/Error'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useCategory } from '../../context/categoryContext'
import './ProductDashboard.css'

export default function ProductDashboard() {
    const { toggleProductModal, getProducts, products, error } = useProducts()
    const { toggleCategoryModal } = useCategory()

    useEffect(() => {
        getProducts()
    }, [])

    if (error) return <Error message={'Error al intentar cargar los productos'}/>

    if (!products) return <Loading icon={faBox}/>

    return (
        <div className="dashboard-container">
            <h1 className="title dashboard-title">Administrador de productos</h1>
            <section className="add-product-btn-section">
                <p className="products-number">Hay un total de {products.length} productos.</p>
                <div className="category-btn-container">
                    <button className="category-btn" onClick={() => toggleCategoryModal()}>
                        Categorias
                    </button>
                </div>
                <div className="add-product-btn-container">
                    <button className="add-product-btn" onClick={() => toggleProductModal()}>
                        <FontAwesomeIcon icon={faAdd}/>
                    </button>
                </div>
            </section>
            <SearchBar placeholder={'Buscar producto'} searchFn={getProducts}/>
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
                            <ProductRow key={product._id} productData={product}/>
                        ))
                    }
                </tbody>
            </table>
            { products.length === 0 && <NoItemsFound icon={faBoxOpen} dashboardStyle={true} message={'No hay productos'}/> }
        </div>
    )
}