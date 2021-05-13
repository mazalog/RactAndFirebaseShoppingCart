import {useEffect, useState} from 'react'
import getProductos from '../services/getProductos'

export function useProductos(){

    const [productos,setProductos]=useState([])

    useEffect(()=>{
      const data= getProductos()
      setProductos(data)
    },[])

    return {productos }
}