import {useContext,useEffect} from 'react'
import getProductos from '../services/getProductos'
import ProductosContex from '../context/ProductosContext'

export function useProductos(){

    const {productos,setProductos}=useContext(ProductosContex)

    useEffect(()=>{
      const data= getProductos()
      setProductos(data)
    },[])

    return {productos }
}