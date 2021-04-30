import { useState, useEffect } from 'react'
import getProductos from '../services/getProductos'

export function useSingleProducto({ nProducto }) {

    const [producto, setProducto] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const data = getProductos()
        const productoA = data.find(producto => producto.producto === nProducto)
        console.log(productoA)
        setProducto(productoA)
        setTimeout(() => {
            setLoading(false)
        }, 200)
    }, [])

    return { producto, isLoading }
}