import React from 'react'
import ListaProductos from '../../Componentes/ListaProductos'
import Social from '../../Componentes/Social'
import { useProductos } from '../../hooks/useProductos'
import './style.css'

export default function Home() {

    const { productos } = useProductos()

    return (<>

        <div className="d-none-md">
            <Social />
        </div>

        <ListaProductos productos={productos} />
    </>)
}
