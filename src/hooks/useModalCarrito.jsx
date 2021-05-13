import {useContext} from 'react'
import CarritoContext from '../context/CarritoContext'

export function useModalCarrito(){
    
    const {values}=useContext(CarritoContext)
    const {modalCarrito,setModalCarrito}=values

    const abreModalCarrito = () => setModalCarrito(true)

    const cerrarModalCarrito = () =>  setModalCarrito(false)

    return {modalCarrito,abreModalCarrito,cerrarModalCarrito}
}