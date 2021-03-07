import React from 'react'
import ListaProductos from '../../Componentes/ListaProductos'
import { useProductos } from '../../hooks/useProductos'


const BusquedaProducto=({params})=>{

    const search=decodeURIComponent((params.producto))

    const {productos}=useProductos()

    const listProductes=productos.filter(producto=> producto.producto===search)

    return(
       <ListaProductos productos={listProductes}/>
    )
}

export default BusquedaProducto