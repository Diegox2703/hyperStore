import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

function CartProvider({ children }) {
    const [cart, setCart] = useState(null)
    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let contador = 0
        let total = 0

        cart?.forEach(item => {
            contador += item.quantity
            total += item.quantity * item.price
        })

        setCount(contador)
        setTotal(total)

    }, [cart])

    function getCartProducts() {
        const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || []

        setCart(cartProducts)
    }

    function cartModal(title) {
        return Swal.fire({
            position: "top-end",
            icon: "success",
            title: title,
            showConfirmButton: false,
            timer: 1500,
            color: 'rgb(0, 88, 117)',
            customClass: {
                popup: 'custom-popup'
            }
          });
    }

    function addProductToCart(product) {
        const cartProductsInLocalStorage = JSON.parse(localStorage.getItem('cartProducts'))
        product.quantity = 1
        product.total_product = product.price

        if (cartProductsInLocalStorage) {
            const isInCart = cartProductsInLocalStorage.find(cart => cart.id === product.id)
                        
            if (isInCart) {
                let cartProducts = cartProductsInLocalStorage.filter(cart => cart.id !== product.id) 
                localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
                setCart(cartProducts)
                cartModal('Producto eliminado del carrito')
            } else {
                localStorage.setItem('cartProducts', JSON.stringify([...cartProductsInLocalStorage, product]))
                setCart([...cartProductsInLocalStorage, product])
                cartModal('Producto agregado al carrito')
            }
        } else {
            localStorage.setItem('cartProducts', JSON.stringify([product]))
            setCart([product])
            cartModal('Producto agregado al carrito')
        }
    }

    function removeProductFromCart(id) {
        const cartProducts = JSON.parse(localStorage.getItem('cartProducts'))
        const newProducts = cartProducts.filter(cartProduct => cartProduct.id !== id)

        localStorage.setItem('cartProducts', JSON.stringify(newProducts))
        setCart(newProducts)
        cartModal('Producto eliminado del carrito')
    }

    function increaseQuantity(product) {
        product.quantity += 1
        product.total_product = product.quantity * product.price
        const updatedProducts = cart.map(item => item.id === product.id ? {...product} : item)

        localStorage.setItem('cartProducts', JSON.stringify(updatedProducts))
        setCart(updatedProducts)
    }

    function decreaseQuantity(product) {
        if (product.quantity > 1) {
            product.quantity -= 1
            product.total_product = product.quantity * product.price
            const updatedProducts = cart.map(item => item.id === product.id ? {...product} : item)
    
            localStorage.setItem('cartProducts', JSON.stringify(updatedProducts))
            setCart(updatedProducts)
        } 
    }

    function removeFromCartIfDeleted(id) {
        const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || []
        const newProducts = cartProducts.filter(product => product.id !== id)

        localStorage.setItem('cartProducts', JSON.stringify(newProducts))
        setCart(newProducts)
    }

    function updateFromCartIfUpdated(product) {
        const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || []
        const productInCart = cartProducts.find(item => item.id === product.id)

        if (productInCart) {
            const updatedProduct = {
                ...product,
                quantity: productInCart.quantity,
                total_product: productInCart.quantity * product.price
            }
            const updatedProducts = cartProducts.map(item => item.id === product.id ? {...updatedProduct} : item)
    
            localStorage.setItem('cartProducts', JSON.stringify(updatedProducts))
            setCart(updatedProducts)
        }
    }

    return (
        <CartContext.Provider value={{
            getCartProducts,
            addProductToCart,
            removeProductFromCart,
            increaseQuantity,
            decreaseQuantity,
            removeFromCartIfDeleted,
            updateFromCartIfUpdated,
            cart,
            count,
            total
         }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider