import { createContext, useContext, useState } from "react";
import axios from 'axios'
import Swal from 'sweetalert2'
import { modal } from "../utils/modalUtils.js";
import { useCart } from "./cartContext";
import { useCategory } from "./categoryContext.jsx";

const ProductContext = createContext()

export const useProducts = () => useContext(ProductContext)

function ProductProvider( {children} ) {
    const [products, setProducts] = useState(null)
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null)
    const [productError, setProductError] = useState(null)
    const [searchResult, setSearchResult] = useState([])
    const [searchError, setSearchError] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [editProduct, setEditProduct] = useState(null)
    const { selectedCategory, selectedSubCategory } = useCategory()
    const { removeFromCartIfDeleted, updateFromCartIfUpdated } = useCart()

    const URL = 'http://localhost:3000/api'

    function toggleProductModal() {
        setIsOpen(!isOpen)
        setEditProduct(null)
    }

    async function searchProduct(product) {
        try {
            const { data } = await axios.get(`${URL}/products?product=${product}`)
            setSearchResult(data.products)
        } catch (error) {
            if (error.status === 404) return setProducts([])
            console.log(error)
            setSearchError(true)
        }
    }

    async function getProducts(product = '') {
        try {
            const { data } = await axios.get(`${URL}/products?product=${product}`)
            setProducts(data.products)
        } catch (error) {
            if (error.status === 404) return setProducts([])
            console.log(error)
            setError(true)
        }
    }

    async function getProduct(id) {
        setProductError(null)
        setProduct(null)
        try {
            const { data } = await axios.get(`${URL}/products/${id}`)
            setProduct(data.product)
        } catch (error) {
            console.log(error)
            setProductError(true)
        }
    }

    async function addProduct(data) {
        data.price = parseFloat(data.price)

        const formData = new FormData()

        formData.append('product_name', data.product_name)
        formData.append('category', selectedCategory._id)
        formData.append('subcategory', selectedSubCategory)
        formData.append('price', data.price)
        formData.append('stock', data.stock)
        formData.append('description', data.description)
        formData.append('image', data.image[0])

        try {
            if (editProduct) {
                console.log('aca se ejecuto')
                const { data } = await axios.put(`${URL}/products/${editProduct._id}`, formData)
                const updatedProducts = products.map(product => product._id === editProduct._id ? {...data.updatedProduct} : product)
                
                updateFromCartIfUpdated(data.updatedProduct)
                setProducts(updatedProducts)
                setEditProduct(null)
                modal('success', '¡Producto actualizado con exito!')
            } else {
                const { data } = await axios.post(`${URL}/products`, formData)
                setProducts([...products, data.newProduct])
                
                modal('success', '¡Producto subido con exito!')
            }

            setIsOpen(!isOpen)
        } catch (error) {
            console.log(error)
            modal('error', 'Oops...', 'Parece que algo salio mal, intentelo mas tarde')
        }
    }

    function updateProduct(product) {
        setEditProduct(product)
        setIsOpen(!isOpen)
    }

    function deleteProduct(id) {
        Swal.fire({
            title: "¿Estas seguro?",
            text: "¡No podras revertir esto!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: "#d33",
            cancelButtonText: 'Cancelar',
            confirmButtonText: "<div style='color: rgb(255, 255, 137)'>Si</div>",
            confirmButtonColor: 'rgb(0, 88, 117)',
            color: 'rgb(0, 88, 117)',
            customClass: {
                popup: 'custom-popup'
            }
          }).then(async (result) => {
            try {
                if (result.isConfirmed) {
                  await axios.delete(`${URL}/products/${id}`)
    
                  const newProducts = products.filter(product => product._id !== id)
                  removeFromCartIfDeleted(id)
                  setProducts(newProducts)
                    
                  modal('success', 'Eliminado', 'Tu producto fue eliminado con exito')
                }
            } catch (error) {
                console.log(error)
                modal('error', 'Oops...', 'Parece que algo salio mal, intentelo mas tarde')
            }
          });
    }

    function toggleSearch() {
        setIsSearchOpen(!isSearchOpen)
    }

    return (
        <ProductContext.Provider 
            value={ { 
                isOpen, 
                toggleProductModal,
                addProduct, 
                getProducts, 
                products, 
                updateProduct, 
                editProduct,
                deleteProduct,
                getProduct,
                product,
                error,
                productError,
                searchResult,
                searchProduct,
                searchError,
                toggleSearch,
                isSearchOpen
            } }
        >
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider