import { createContext, useContext, useState } from "react";
import axios from 'axios'
import Swal from 'sweetalert2'
import { useCart } from "./cartContext";

const ProductContext = createContext()

export const useProducts = () => useContext(ProductContext)

function ProductProvider( {children} ) {
    const [products, setProducts] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [editProduct, setEditProduct] = useState(null)
    const { removeFromCartIfDeleted, updateFromCartIfUpdated } = useCart()

    const URL = 'https://67cf1b76823da0212a81711b.mockapi.io'

    function toggleProductModal() {
        setIsOpen(!isOpen)
        setEditProduct(null)
    }

    function modal(icon, title, text) {
        return Swal.fire({
            icon: icon,
            title: title,
            text: text,
            color: 'rgb(0, 88, 117)',
            confirmButtonColor: 'rgb(0, 88, 117)',
            confirmButtonText: '<div style="color: rgb(255, 255, 137)">Ok</div>',
            customClass: {
                popup: 'custom-popup'
            }
        })
    }

    async function getProducts() {
        try {
            const { data } = await axios.get(`${URL}/products`)
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }

    async function addProduct(formData) {
        formData.price = parseFloat(formData.price)

        try {
            if (editProduct) {
                const { data } = await axios.put(`${URL}/products/${editProduct.id}`, formData)
                const updatedProducts = products.map(product => product.id === editProduct.id ? {...data} : product)
                
                updateFromCartIfUpdated(data)
                setProducts(updatedProducts)
                setEditProduct(null)
                modal('success', '¡Producto actualizado con exito!')
            } else {
                const newProduct = {
                    id: crypto.randomUUID(),
                    ...formData
                }
    
                const { data } = await axios.post(`${URL}/products`, newProduct)
                setProducts([...products, data])
                
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
    
                  const newProducts = products.filter(product => product.id !== id)
                  removeFromCartIfDeleted(id)
                  setProducts(newProducts)
    
                  Swal.fire({
                    title: "¡Eliminado!",
                    text: "Tu producto fue eliminado con exito",
                    icon: "success",
                    confirmButtonText: "<div style='color: rgb(255, 255, 137)'>Ok</div>",
                    confirmButtonColor: 'rgb(0, 88, 117)',
                    color: 'rgb(0, 88, 117)',
                    customClass: {
                        popup: 'custom-popup'
                    }
                  });
                }
            } catch (error) {
                console.log(error)
                modal('error', 'Oops...', 'Parece que algo salio mal, intentelo mas tarde')
            }
          });
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
                deleteProduct
            } }
        >
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider