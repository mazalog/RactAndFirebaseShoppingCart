import React,{useState} from "react";
import PropTypes from "prop-types";
import { CssBaseline} from "@material-ui/core/";
import {useStyles} from './style'
import AppBar from "../AppBar";
import BarraNavegacion from '../BarraNavegacion'
import Productos from "../Productos";
import {CarritoContextProvider} from '../../context/CarritoContext'
import {Grid,Box,Typography} from "@material-ui/core";
import Bread from "../Bread";



function ResponsiveDrawer(props) {

  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {setMobileOpen(!mobileOpen);};
  const container = window !== undefined ? () => window().document.body : undefined;
  const [busqueda,setbusqueda]=useState("nula")
  const [categoria,setcategoria]=useState("todos") 


  const buscar=(params)=>{
    setbusqueda(params)
  }

  const seleccionarCategoria=(params)=>{
    setcategoria(params)
    setbusqueda("nula")
  }

  return (
    <div className={classes.root}>
      
      <CssBaseline />

      <AppBar
        handleDrawerToggle={handleDrawerToggle}
        clase={classes.appBar}
        buscar={buscar}
      />
  
       <BarraNavegacion 
       container={container} 
       handleDrawerToggle={handleDrawerToggle}
       mobileOpen={mobileOpen}
       seleccionarCategoria={seleccionarCategoria} 
       />
       

      <main className={classes.content}>
        <div className={classes.toolbar} />
          <CarritoContextProvider>
            <div className="container">

            <Grid container spacing={1}>
              <Grid container item xs={12}>
                <Box marginY={6}>
                  <Typography variant="h6" component="b" color="initial">
                    <Bread categoria={categoria}></Bread>
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Productos
                 categoria={categoria}
                 handleDrawerToggle={handleDrawerToggle}
                 clase={classes.appBar}
                 busqueda={busqueda}
            />
            
            </div>
          </CarritoContextProvider>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
