import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CloseIcon from '@material-ui/icons/Close';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import {useStyles} from './style'
import {useCarrito} from '../../hooks/useCarrito'


export default function SimpleBottomNavigation(props) {
  
  const classes = useStyles();
  const {pagar,nPrecio}=useCarrito()

  return (

    <BottomNavigation
      showLabels
      className={classes.root}
    >
              <BottomNavigationAction  className={classes.co} label={nPrecio} icon={<LocalAtmIcon fontSize="large" />} onClick={()=>pagar()} />
              <BottomNavigationAction label="CERRAR" icon={<CloseIcon  color="secondary" fontSize="large"/>} onClick={()=>props.cerrar()} />

    </BottomNavigation>
  );
}
