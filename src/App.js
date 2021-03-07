import React from 'react'
import "./estilo.css"
import {ProductosContextProvider} from './context/ProductosContext'
import { CarritoContextProvider } from "./context/CarritoContext"
import Panel from './Componentes/Panel'


function App() {
  return (
    <ProductosContextProvider> 
      <CarritoContextProvider>
         <Panel/>
      </CarritoContextProvider>
    </ProductosContextProvider>
  );
}

export default App;
