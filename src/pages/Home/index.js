import React from 'react'
import ListaProductos from '../../Componentes/ListaProductos'
import Social from '../../Componentes/Social'
import { useProductos } from '../../hooks/useProductos'

const Home = () => {
    const { productos } = useProductos()

    return (<>
        <Social />

        <ListaProductos productos={productos} />
    </>)

}
export default Home