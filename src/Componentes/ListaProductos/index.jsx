import React from "react"
import {useCarrito} from "../../hooks/useCarrito"
import {useModalCarrito} from '../../hooks/useModalCarrito'
import {Grid} from "@material-ui/core"
import Alert from "@material-ui/lab/Alert"
import Producto from "../Producto"
import Car from "../Car"
import Alerta from '../Alerta'
import FinalizaCompraYa from "../FinalizaCompraYa"

export default function ListaProductos  ({productos}) {
  
  const {alertaAddProducto,cerrarAlertaAddProducto,nCantidad,carrito}=useCarrito()  

  const {abreModalCarrito}=useModalCarrito()

  return (
    <>
        {productos.length !== 0 ? (
          <Grid container spacing={3}>
            {productos.map((item, index) => (
              <Grid key={index} item xs={6} sm={6} md={3}>
                <Producto
                item={item}
                />
              </Grid>
            ))}     
          </Grid>
        ) : (
          <Grid container spacing={3}>
               <Alert severity="error">Sin articulos que mostrar.</Alert>
         </Grid>
        )}

        <div className="carrito">
              <Car
                handleClickOpen={abreModalCarrito}
                totalcantidadproductos={nCantidad}
              />
        </div>
        { carrito.length!==0?<> <FinalizaCompraYa/></>:<></>}
       <Alerta text="Agregado al carrito" alerta={alertaAddProducto} cerrar={cerrarAlertaAddProducto} tipo="success" />
    </>
  )
}
