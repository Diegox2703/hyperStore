import { useContext, createContext, useState } from 'react'
import { useAuth } from './authContext'
import { useCart } from './cartContext'
import axios from 'axios'
import { modal } from '../utils/modalUtils'
import { useNavigate } from 'react-router'

const orderContext = createContext()

export const useOrder = () => useContext(orderContext)

function orderProvider ({ children }) {
    const navigate = useNavigate()
    const { user, setUser } = useAuth()
    const { total, setCart } = useCart()
    const [ orders, setOrders ] = useState([])
    const [ isOrderError, setIsOrderError ] = useState(false)
    const [ isOrdersLoading, setIsOrdersLoading ] = useState(false)
    const [ isCreateOrderLoading, setIsCreateOrderLoading ] = useState(false)
    
    const URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

    const getOrders = async () => {
        setIsOrdersLoading(true)
        setIsOrderError(false)
        try {
            const { data } = await axios.get(`${URL}/orders`, {
                withCredentials: true
            })
            setOrders(data.orders)
        } catch (error) {
            if (error.status === 404) {
                setOrders([]) 
                setIsOrdersLoading(false)
                return 
            } 
            if (error.status === 401) {
                navigate('/login')
                setUser(null)
                return
            }
            console.log(error)
            setIsOrderError(true)
        } finally {
            setIsOrdersLoading(false)
        }
    }

    const createOrder = async () => {
        const cartItems = JSON.parse(localStorage.getItem('cartProducts'))
        const products = cartItems.map(item => ({
            product: item._id,
            quantity: item.quantity,
            price: item.total_product
        }))
        
        const order = {
            user: user?._id,
            products,
            total
        }

        setIsCreateOrderLoading(true)
        try {
            const { data } = await axios.post(`${URL}/orders`, order, {
                withCredentials: true
            })
            setOrders([...orders, data.newOrder])

            setCart([])
            localStorage.removeItem('cartProducts')
            modal('success', 'Orden creada', 'Revisa tu compra en la seccion de compras')
        } catch (error) {
            if (error.status === 401) {
                navigate('/login')
                setUser(null)
                return
            } 
            console.log(error)
            modal('error', 'Opps', 'Error al crear orden')
        } finally {
            setIsCreateOrderLoading(false)
        }
    }

    const createOrderWithoutCart = async (product) => {
        const newProduct = [{
            product: product._id,
            quantity: 1,
            price: product.price
        }]

        const order = {
            user: user?._id,
            products: newProduct,
            total: product.price
        }

        setIsCreateOrderLoading(true)
        try {
            const { data } = await axios.post(`${URL}/orders`, order, {
                withCredentials: true
            })
            setOrders([...orders, data.newOrder])

            modal('success', 'Orden creada', 'Revisa tu compra en la seccion de compras o ordenes')
        } catch (error) {
            if (error.status === 401) {
                navigate('/login')
                setUser(null)
                return
            } 
            console.log(error)
            modal('error', 'Opps', 'Error al crear orden')
        } finally {
            setIsCreateOrderLoading(false)
        }
    }

    return (
        <orderContext.Provider value={{
            createOrder,
            createOrderWithoutCart,
            getOrders,
            orders,
            isOrdersLoading,
            isCreateOrderLoading,
            isOrderError,
        }}>
            { children }
        </orderContext.Provider>
    )
}

export default orderProvider
