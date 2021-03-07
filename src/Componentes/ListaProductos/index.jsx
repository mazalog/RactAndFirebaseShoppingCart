import React from "react"
import {Grid,Box,IconButton} from "@material-ui/core"
import Alert from "@material-ui/lab/Alert";
import AddIcon from "@material-ui/icons/PostAdd"
import {useCarrito} from "../../hooks/useCarrito"
import {useModalCarrito} from '../../hooks/useModalCarrito'
import Producto from "../Producto"; 
import Car from "../Car"
import Alerta from '../Alerta'

const ListaProductos = ({productos}) => {
  
  const {addProCarrito,alertaAddProducto,cerrarAlertaAddProducto,nCantidad}=useCarrito()  

  const {abreModalCarrito}=useModalCarrito()

  const addprocarrito=(producto)=> addProCarrito(producto)

  return (
    <>
        {productos.length !== 0 ? (
          <Grid container spacing={3}>
            {productos.map((item, index) => (
              <Grid key={index} item xs={6} sm={6} md={3}>
                <Producto
                addprocarrito={addprocarrito}
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
       <Grid container spacing={1}>
          <Grid container justify="center" item xs={12}>
            <Box margin={4} marginBottom={15}>
              <IconButton aria-label="Mas" color="primary">
                <AddIcon fontSize="large"></AddIcon>
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <div className="carrito">
              <Car
                handleClickOpen={abreModalCarrito}
                totalcantidadproductos={nCantidad}
              />
        </div>

      <Alerta text="Agregado al carrito" alerta={alertaAddProducto} cerrar={cerrarAlertaAddProducto} tipo="success" />
   
    </>
  )
}
export default ListaProductos;
