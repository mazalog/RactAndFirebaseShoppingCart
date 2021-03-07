import {useContext} from 'react'
import CarritoContext from '../context/CarritoContext'

export function useModalCarrito(){
    
    const {modalCarrito,setModalCarrito}=useContext(CarritoContext)

    const abreModalCarrito = () => setModalCarrito(true)

    const cerrarModalCarrito = () =>  setModalCarrito(false)

    return {modalCarrito,abreModalCarrito,cerrarModalCarrito}
}