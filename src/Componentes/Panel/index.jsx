import React, { useState } from "react"
import PropTypes from "prop-types"
import { CssBaseline,IconButton ,Grid, Box, Typography,Fab} from "@material-ui/core/"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./style"
import {Route,Switch} from 'wouter'
import {useModalCarrito} from '../../hooks/useModalCarrito'
import AppBar from "../AppBar"
import BarraNavegacion from "../BarraNavegacion"
import Bread from "../Bread"
import ModalCarrito from '../ModalCarrito'
import BusquedaCategoria from "../../pages/BusquedaCategoria";
import BusquedaProducto from '../../pages/BusquedaProducto'
import  Home from "../../pages/Home";
import  SingleProducto from "../../pages/SingleProducto";
import FinalizarPedidoPage from "../../pages/FinalizarPedido";
import OrdenPage from "../../pages/FinalizarPedido/Orden";
import Footer from "../Footer";
import Services from "../Services";


function Panel(props) {

  const { window } = props
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = useState(false)

  const {modalCarrito,cerrarModalCarrito}=useModalCarrito()

  const container = window !== undefined ? () => window().document.body : undefined

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#fff176",
      },
    },
  })

  return (
    <div className={classes.root}>

      <CssBaseline />

      <AppBar
        handleDrawerToggle={handleDrawerToggle}
        clase={classes.appBar}
      />

      <BarraNavegacion
        container={container}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />

      <main className={classes.content}>
        <div className={classes.toolbar} />
          <div className="container">
            <Grid container spacing={1}>
              <Grid container item xs={12}>
                <Box marginY={6}>
                  <Typography variant="h6" component="b" color="initial">
                    <Bread
                     categoria={'undefined'} 
                     />
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Switch>
            <Route
            component={Home}
            path="/"
            />
            <Route
             component={BusquedaCategoria}
             path="/categorias/:categoria"
            />
            <Route
            component={BusquedaProducto}
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
            <div className="menu">
              <IconButton
                onClick={() =>handleDrawerToggle()}
                aria-label="Categorias"
                className={classes.appBar}
              >
                <ThemeProvider theme={theme}>
                  <Fab color="primary">
                    <MenuIcon/>
                  </Fab>
                </ThemeProvider>
              </IconButton>
            </div>

              <ModalCarrito
                handleClose={cerrarModalCarrito}
                open={modalCarrito}
              />

          </div>
          <Services/>
          <Footer/>
      </main>
    </div>
  )
}

Panel.propTypes = {
  window: PropTypes.func,
}

export default Panel
