import React from 'react'
import ListaProductos from '../../Componentes/ListaProductos'
import { useProductos } from '../../hooks/useProductos'

const Home=()=>{
    const {productos}=useProductos()

    return <ListaProductos productos={productos}/>

}
export default Home