import React from 'react'
import { Drawer, Hidden } from "@material-ui/core/";
import {useTheme } from "@material-ui/core/styles";
import {useStyles} from './style'
import listaCategorias from '../ListaCategorias'

const BarraNavegacion=({container,handleDrawerToggle,mobileOpen,seleccionarCategoria})=>{

    const theme=useTheme()
    const classes=useStyles()
    const Categorias=listaCategorias({seleccionarCategoria,classes})

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