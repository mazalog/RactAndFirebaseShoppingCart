import React from 'react'
import "./estilo.css"
import Panel from './Componentes/Panel'
import {ProductosContextProvider} from './context/ProductosContext'

function App() {
  return (
    <ProductosContextProvider>
          <Panel> </Panel>
    </ProductosContextProvider>
  );
}

export default App;
