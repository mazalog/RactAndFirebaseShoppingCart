import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import CloseIcon from '@material-ui/icons/Close'
import {useStyles} from './style'
import {useCarrito} from '../../hooks/useCarrito'
import './styleCss.css'
import { useLocation} from 'wouter'
import { useModalCarrito } from '../../hooks/useModalCarrito'
import {animateScroll as scroll} from 'react-scroll'


export default function SimpleBottomNavigation(props) {

  const classes = useStyles();
  const {carrito,enviarPedidoaWhatsapp}=useCarrito()
  

  const [,navigate]=useLocation()

  const {cerrarModalCarrito}=useModalCarrito()
  
  const navegar=()=>{
    if(carrito.length!==0){
    cerrarModalCarrito()
    scroll.scrollToTop()
    navigate('/FinalizarPedido')
    }

  }
  
  return (
  <>
    <BottomNavigation
      showLabels
      className={classes.root}
    >
      <div className="btn-navi">
         <div onClick={navegar} className="container-"><h6 className="fi">Finalizar Compra </h6></div>   
         <div style={{marginTop:'6px'}} onClick={()=>enviarPedidoaWhatsapp({cell:5804241917939})} className="container-wha "><h6 className="wha">Realizar pedido por whatsapp</h6></div>         
      </div>
   
    <BottomNavigationAction icon={<CloseIcon  color="secondary" fontSize="large"/>} onClick={()=>props.cerrar()} />
    </BottomNavigation>
  </>
  );
}
