import React from 'react'
import "./estilo.css"
import { ProductosContextProvider } from './context/ProductosContext'
import { CarritoContextProvider } from "./context/CarritoContext"
import { Route, Switch } from 'wouter'
import Layout from './Componentes/Layout'
import HomePage from "./pages/Home";
import CategoriaPage from "./pages/BusquedaCategoria";
import BusquedaPage from './pages/BusquedaProducto'
import SingleProducto from "./pages/SingleProducto";
import FinalizarPedidoPage from "./pages/FinalizarPedido";
import OrdenPage from "./pages/FinalizarPedido/Orden";


function App() {
  return (
    <ProductosContextProvider>
      <CarritoContextProvider>
        <Layout>
          <Switch>
            <Route
              component={HomePage}
              path="/"
            />
            <Route
              component={CategoriaPage}
              path="/categorias/:categoria"
            />
            <Route
              component={BusquedaPage}
              path="/busqueda/:producto"
            />
            <Route
              component={SingleProducto}
              path="/producto/:producto"
            />
            <Route
              component={FinalizarPedidoPage}
              path="/FinalizarPedido"
            />
            <Route
              component={OrdenPage}
              path="/FinalizarPedido/Orden/:orden"
            />
          </Switch>
        </Layout>
      </CarritoContextProvider>
    </ProductosContextProvider>
  );
}

export default App;
