import React from "react"
import { Link } from "wouter"
import Autocomplete from '../BarraBusqueda'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import { ThemeProvider } from "@material-ui/core"
import KitchenIcon from '@material-ui/icons/Kitchen'
import { withStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge';
import {useStyles} from './style'
import './style.css'
import {useModalCarrito} from '../../hooks/useModalCarrito'
import {useCarrito} from '../../hooks/useCarrito'

export default function SearchAppBar(props) {
  


  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

   const classes = useStyles()

   const {abreModalCarrito}=useModalCarrito()

   const {nCantidad}=useCarrito()

  return (
    <ThemeProvider theme={props.theme}>
      <div className={classes.root}>
        <AppBar position="fixed" className={props.clase}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={()=>props.handleDrawerToggle()}
            >
              <KitchenIcon />
            </IconButton>
            <div className={classes.title}>
              <div style={{display:'flex'}}>
                <div className="a-logo">
                <Link to="/">   
                   <Typography variant="h6" noWrap>MzHogar</Typography>
               </Link>
                </div>
              <div className="a-carrito">
                <button style={{background:'none'}} onClick={()=>abreModalCarrito()}>
                   <p>Carrito</p>  
                   <StyledBadge badgeContent={nCantidad} >
                        <ShoppingCartIcon />
                   </StyledBadge>
                  </button>
              </div>
              </div>
            </div>
              <Autocomplete ></Autocomplete>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  )
}
