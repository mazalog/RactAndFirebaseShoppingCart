import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CloseIcon from '@material-ui/icons/Close';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import {green} from '@material-ui/core/colors/green'




const useStyles = makeStyles({
  root: {
    width:2000,

  },
  co:{
    color:'#fff',
    borderRadius:'5px',
    background:'#198754'
  }
});

export default function SimpleBottomNavigation(props) {
  
  const classes = useStyles();

  
  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }
  const pagar = () => {
    const array = [];
    props.carrito.forEach((doc) => {
      array.push(
        JSON.stringify(
          doc.producto +
            " - " +
            doc.cu +
            "$ x " +
            doc.cantidad +
            " uni = " +
            ccyFormat(doc.precio) +
            "$" +
            "%3A%0A"
        )
      );
    });
    const nCantidad = Object.values(props.carrito).reduce(
      (acc, { cantidad }) => acc + cantidad,
      0
    );
    var nPrecio = Object.values(props.carrito).reduce(
      (acc, { cantidad, cu }) => acc + cantidad * cu,
      0
    );

    nPrecio=ccyFormat(nPrecio)
    
    window.open(
      `https://api.whatsapp.com/send?phone=584123396643&text=Hola+requiero+este+pedido%3A%0A%0A${array.toString()}%3A%0A%0ACantidad+de+Articulos%3A${nCantidad}+%2C%0ATotal%3A${nPrecio}$+%0A`,
      "_blank"
    );
    props.vaciarcarrito();
  };
  var pago="PAGAR "+ccyFormat(parseFloat(props.pagartotal))+"$"
  return (

    <BottomNavigation
      showLabels
      className={classes.root}
    >
              <BottomNavigationAction  className={classes.co} label={pago} icon={<LocalAtmIcon fontSize="large" />} onClick={()=>pagar()} />
              <BottomNavigationAction label="CERRAR" icon={<CloseIcon  color="secondary" fontSize="large"/>} onClick={()=>props.cerrar(props.carrito)} />

    </BottomNavigation>
  );
}
