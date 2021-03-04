import {useContext} from 'react'
import ProductosContext from '../context/ProductosContext'

export default function useGlobalProductos(){
    return useContext(ProductosContext).productos
}