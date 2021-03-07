import React from 'react'
import ListaProductos from '../../Componentes/ListaProductos'
import {useProductos} from '../../hooks/useProductos'

const BusquedaCategoria=({params})=>{
    const {productos}=useProductos()

    const listproductes=productos.filter(pro=>pro.categoria===params.categoria)

    return <ListaProductos productos={listproductes}/>
}

export default BusquedaCategoria