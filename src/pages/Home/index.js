import React from 'react'
import ListaProductos from '../../Componentes/ListaProductos'
import Social from '../../Componentes/Social'
import { useProductos } from '../../hooks/useProductos'
import './style.css'

const Home = () => {
    const { productos } = useProductos()

    return (<>
        <div className="aloneXs">
            <Social />
        </div>
        <ListaProductos productos={productos} />
    </>)

}
export default Home