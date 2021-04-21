import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CloseIcon from '@material-ui/icons/Close';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import {useStyles} from './style'
import {useCarrito} from '../../hooks/useCarrito'
import './styleCss.css'


export default function SimpleBottomNavigation(props) {
  
  const classes = useStyles();
  const {pagar,nPrecio}=useCarrito()

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  return (

    <BottomNavigation
      showLabels
      className={classes.root}
    >

   <div onClick={pagar} className="container-wha"><h5 className="wha">Enviar a whatsapp</h5>   </div>         

   <BottomNavigationAction label="CERRAR" icon={<CloseIcon  color="secondary" fontSize="large"/>} onClick={()=>props.cerrar()} />

    </BottomNavigation>
  );
}
