import React, { useEffect } from 'react'
import {Box, Grid} from '@material-ui/core/'
import Typography from '@material-ui/core/Typography'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import Button from '@material-ui/core/Button'
import './index.css'
import {useProductos} from '../../hooks/useProductos'
import {useCarrito} from '../../hooks/useCarrito'
import {useModalCarrito} from '../../hooks/useModalCarrito'
import Car from '../../Componentes/Car'
import ListaProductos from '../../Componentes/ListaProductos'
import Alerta from '../../Componentes/Alerta'


const SingleProducto=({params})=>{

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#1c9222",
      },
    },
  })

    const {productos}=useProductos()


    const {addProCarrito,alertaAddProducto,cerrarAlertaAddProducto,nCantidad}=useCarrito()  

    const {abreModalCarrito}=useModalCarrito()
  
    const addprocarrito=(producto)=> addProCarrito(producto)

    const producto=productos.find(producto=>producto.producto===decodeURI(params.producto))



    const [proRandom,setProRandom]=React.useState([])

    const masProductos=()=>{
          const productosRandom=[]
           for(var n = 0; n < 6; n++) {
           const mas= productos[Math.floor(Math.random() * productos.length)]
            productosRandom.push({...mas})
           }
           setProRandom(productosRandom)
    }

    useEffect(()=>{
    
     masProductos()
    },[])
    function ccyFormat(num) {
        return `${num.toFixed(2)}`;
      }

    return (
        <>
        <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={3}>
               <img src={producto.url}/>
            </Grid>
            <Grid item xs={6} sm={6} md={5}>
                 <Typography variant="h5"  color="textSecondary">
                     {producto.producto}
                 </Typography>
                 <br/>
                 <Typography variant="h6" color="textSecondary">
                     Descripción
                 </Typography>
                 <br/>
                 <Typography variant="body2" color="textSecondary">
                     {producto.producto}
                 </Typography>
                 <br/>
                 <Typography variant="h6" color="textSecondary">
                     Mercancia disponible:
                 </Typography>
                 <br/>
                 <Typography variant="body2" color="textSecondary">
                     496 producto(s)
                 </Typography>
            </Grid>
            <Grid item xs={6} sm={12} md={4}>
                <Typography variant="body2" color="textSecondary">
                    <b>Precio:</b>
                </Typography>
                <br/>
                <Box
                textAlign="center"
                >
                    <Typography variant="h5" color="textSecondary">
                        <b>${ccyFormat(producto.precio)} USD </b>
                    </Typography>
                    <br/><br/>
                    <ThemeProvider theme={theme}>
                        <Button variant="outlined" onClick={()=>addprocarrito(producto)} size="large" color="primary">
                            Agregar al carrito                      
                        </Button>
                    </ThemeProvider>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12}>
                <br/><br/>
                <Typography variant="h6" color="textSecondary">
                   Completa tu compra con estos productos: 
                </Typography>
                <br/><br/>
                <ListaProductos productos={proRandom} />
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

export default SingleProducto