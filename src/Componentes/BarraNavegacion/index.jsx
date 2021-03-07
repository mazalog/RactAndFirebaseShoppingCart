import React from 'react'
import { Drawer, Hidden } from "@material-ui/core/";
import {useTheme } from "@material-ui/core/styles";
import {useStyles} from './style'
import {useLocation} from 'wouter'
import listaCategorias from '../ListaCategorias'

const BarraNavegacion=({container,handleDrawerToggle,mobileOpen})=>{

    const theme=useTheme()
    const classes=useStyles()

    const [,navigate]=useLocation()
  
    const seleccionarCategoria=(categoria)=>{
      if(categoria==='todos') return navigate(`/`)
      navigate(`/categorias/${categoria}`)
    }
  
    const Categorias=listaCategorias({classes,seleccionarCategoria})

    return(
        <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{paper: classes.drawerPaper,}}
            ModalProps={{keepMounted: true, }}
          >
            {Categorias}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
           classes={{paper: classes.drawerPaper,}}
            variant="permanent"
            open
          >
            {Categorias}
          </Drawer>
        </Hidden>
      </nav>
    )
}
export default BarraNavegacion