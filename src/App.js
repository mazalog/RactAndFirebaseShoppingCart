import React, { Suspense } from 'react'
import { CarritoContextProvider } from "./context/CarritoContext"
import { Route, Switch } from 'wouter'
import Layout from './Componentes/Layout'
import CategoriaPage from "./pages/BusquedaCategoria"
import SingleProducto from "./pages/SingleProducto"
import HomePage from './pages/Home'
import BusquedaPage from './pages/BusquedaProducto'
import "./estilo.css"

const FinalizarPedidoPage = React.lazy(() => import('./pages/FinalizarPedido'))
const OrdenPage=React.lazy(()=>import ('./pages/FinalizarPedido/Orden'))
const AdminPage = React.lazy(() => import('./pages/admin'))

function App() {
  return (<>

    <CarritoContextProvider>
      <Layout>
        <Suspense fallback={null}>
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
            <Route
              component={AdminPage}
              path="/admin"
            />
          </Switch>
        </Suspense>
      </Layout>
    </CarritoContextProvider>
  </>
  );
}

export default App;
