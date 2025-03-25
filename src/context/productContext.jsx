import { createContext, useContext, useState } from "react";
import axios from 'axios'
import Swal from 'sweetalert2'

const ProductContext = createContext()

export const useProducts = () => useContext(ProductContext)

function ProductProvider( {children} ) {
    const [products, setProducts] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const URL = 'https://67cf1b76823da0212a81711b.mockapi.io'

    function toggleProductModal() {
        setIsOpen(!isOpen)
    }

    async function addProduct(data) {
        data.price = parseFloat(data.price)

        const newProduct = {
            id: crypto.randomUUID(),
            ...data
        }

        try {
            const { data } = await axios.post(`${URL}/products`, newProduct)
            console.log(data)
            Swal.fire({
                icon: 'success',
                title: '¡Producto subido con exito!',
                color: 'rgb(0, 88, 117)',
                confirmButtonColor: 'rgb(0, 88, 117)',
                confirmButtonText: '<div style="color: rgb(255, 255, 137)">Ok</div>',
                customClass: {
                    popup: 'custom-popup'
                }
            })
            setIsOpen(!isOpen)
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Parece que algo salio mal, intentelo mas tarde',
                color: 'rgb(0, 88, 117)',
                confirmButtonColor: 'rgb(0, 88, 117)',
                confirmButtonText: '<div style="color: rgb(255, 255, 137)">Ok</div>',
                customClass: {
                    popup: 'custom-popup'
                }
            })
        }
    }

    return (
        <ProductContext.Provider 
            value={ { isOpen, toggleProductModal, addProduct } }
        >
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider