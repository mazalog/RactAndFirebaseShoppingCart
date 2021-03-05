import React, {useState, Suspense } from "react";
import {Grid,Box,IconButton,Snackbar,Fab,} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import AddIcon from "@material-ui/icons/PostAdd";
import MenuIcon from "@material-ui/icons/Menu";
import CircularProgress from '@material-ui/core/CircularProgress';
import Alerta from './Alerta'
import Card from "./Producto/";
import Car from "./Car";
import ModalCarrito from './ModalCarrito'
import {useProductos} from "../hooks/useProductos";
import {useCarrito} from "../hooks/useCarrito"

const Productos = (props) => {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#fff176",
      },
    },
  });

  const {productos}=useProductos()

  const {addProCarrito,
        alertaAddProducto,
        cerrarAlertaAddProducto,
        nCantidad}=useCarrito()  

  const addprocarrito=(producto)=> addProCarrito(producto)

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true)

  const handleClose = () =>  setOpen(false)
  

  const determinarcontenido = () => {
    if(props.busqueda===null || props.busqueda==="nula"){
      if (props.categoria === "todos") {
        return (
          <>
            {productos.map((item, index) => (
              <Grid key={index} item xs={6} sm={6} md={3}>
                <Card item={item} addprocarrito={addprocarrito}></Card>
              </Grid>
            ))}
          </>
        );
      } else {
        return (
          <>{productos.map((item, index) => determinarcategoria(item, index))}</>
        );
      }
    }else{

      return(
        <>{productos.map((item, index) => buscarproducto(item, index))}</>
      )

    }
  }

  const buscarproducto = (item, index) => {
    if (item.producto === props.busqueda.producto) {
      return (
        <Grid key={index} item xs={6} sm={6} md={3}>
          <Card item={item} addprocarrito={addprocarrito}></Card>
        </Grid>
      );
    }
  };

  const determinarcategoria = (item, index) => {
    if (item.categoria === props.categoria) {
      return (
        <Grid key={index} item xs={6} sm={6} md={3}>
          <Card item={item} addprocarrito={addprocarrito}></Card>
        </Grid>
      );
    }
  };

  return (
    <>
        {productos.length !== 0 ? (
          <Grid container spacing={3}>
            <Suspense
              fallback={
                <Box
                  display="flex"
                  justifyContent="center"
                  m={1}
                  p={1}
                  bgcolor="background.paper"
                >
                  <CircularProgress />
                </Box>
              }
            >
              {determinarcontenido()}
            </Suspense>
          </Grid>
        ) : (
          <Alert severity="error">Sin articulos que mostrar.</Alert>
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

      <div className="menu">
        <IconButton
          onClick={() => props.handleDrawerToggle()}
          aria-label="Categorias"
          className={props.clase}
        >
          <ThemeProvider theme={theme}>
            <Fab color="primary">
              <MenuIcon></MenuIcon>
            </Fab>
          </ThemeProvider>
        </IconButton>
      </div>

      <div className="carrito">
         <Car
          handleClickOpen={handleClickOpen}
          totalcantidadproductos={nCantidad}
        ></Car>
      </div>
      <div>
        <ModalCarrito
          handleClose={handleClose}
          open={open}
        ></ModalCarrito>
      </div>

      <Alerta text="Agregado al carrito" alerta={alertaAddProducto} cerrar={cerrarAlertaAddProducto} tipo="success" />
   
    </>
  );
};
export default Productos;
