import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Paper, Grid, IconButton, Tooltip, Snackbar } from "@material-ui/core/";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Alert from "@material-ui/lab/Alert";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import BotonesModal from "./BotonesModal";
import CloseIcon from "@material-ui/icons/Close";
import Car from "./Car";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

export default function SpanningTable(props) {
  const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 500,
    },
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  }));
  const classes = useStyles();

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  var total = 0;
  const totalcarrito = (item) => {
    total = total + parseFloat(item);
  };

  const [carrito, setcarrito] = useState(props.carrito);

  const addprocarritodos = (datoproducto, cu, image) => {
    carrito.forEach((carro) => {
      if (carro.producto === datoproducto) {
        var totalactual = parseFloat(carro.precio) + cu;
        var totalcantidad = parseFloat(carro.cantidad) + 1;
        const dato = {
          producto: datoproducto,
          precio: totalactual,
          cantidad: totalcantidad,
          cu: cu,
          imagen: image,
        };
        setcarrito(
          carrito.map((producto) =>
            producto.producto === datoproducto ? dato : producto
          )
        );
        handleClickOpensnak();
      }
    });
  };

  const eliminarprocarrito = (item) => {
    if (item.cantidad > 1) {
      carrito.forEach((carro) => {
        if (carro.producto === item.producto) {
          var totalactual = item.precio - carro.cu;
          var totalcantidad = item.cantidad - 1;
          const dato = {
            producto: item.producto,
            precio: totalactual,
            cantidad: totalcantidad,
            cu: carro.cu,
            imagen: carro.imagen,
          };
          setcarrito(
            carrito.map((producto) =>
              producto.producto === item.producto ? dato : producto
            )
          );
          handleClickOpensnakerror();
        }
      });
    } else {
      setcarrito(carrito.filter((carro) => carro.producto !== item.producto));
      handleClickOpensnakerror();
    }
  };

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

    nPrecio = ccyFormat(nPrecio);

    window.open(
      `https://api.whatsapp.com/send?phone=584123396643&text=Hola+requiero+este+pedido%3A%0A%0A${array.toString()}%3A%0A%0ACantidad+de+Articulos%3A${nCantidad}+%2C%0ATotal%3A${nPrecio}$+%0A`,
      "_blank"
    );
    props.vaciarcarrito();
  };

  //Alerta de agg
  const [opensnak, setOpensnak] = useState(false);
  const handleClickOpensnak = () => {
    setOpensnak(true);
  };
  const handleClosesnak = () => {
    setOpensnak(false);
  };

  // Alerta de quitar
  const [opensnakerror, setOpensnakerror] = useState(false);
  const handleClickOpensnakerror = () => {
    setOpensnakerror(true);
  };
  const handleClosesnakerror = () => {
    setOpensnakerror(false);
  };

  var totalproductos = 0;
  const totalcantidadproductos = () => {
    if (carrito.length !== 0) {
      carrito.forEach((carro) => {
        totalproductos = totalproductos + carro.cantidad;
      });
    } else {
      totalproductos = 0;
    }
  };
  totalcantidadproductos();


  var pagartotal=0;
  const pagarentotal = () => {
    if (carrito.length !== 0) {
      carrito.forEach((carro) => {
     pagartotal = pagartotal + carro.precio;
      });
    } else {
  pagartotal= 0;
    }
  };

  return (
    <div>
      {pagarentotal()}
      <DialogTitle id="form-dialog-title">
        <Grid container spacing={1}>
          <Grid container justify="flex-start" item xs={8}>
            <Button className="text-white bg-success" variant="outlined"  onClick={()=>pagar()}>
              Pagar {ccyFormat(parseFloat(pagartotal))}$ de  ({totalproductos}) articulos
            </Button>
          </Grid>
          <Grid container justify="flex-end" item xs={4}>
            <Tooltip title="Cerrar Carrito">
              <IconButton
                aria-label="Cerrar carrito"
                color="secondary"
                onClick={() => props.handleClose(carrito)}
              >
                <CloseIcon></CloseIcon>
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="spanning table">
            <TableHead>
              <TableRow hover>
                <TableCell align="center" colSpan={3}>
                  Detalles
                </TableCell>
                <TableCell align="right">Precio</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Producto</TableCell>
                <TableCell align="right">Precio</TableCell>
                <TableCell align="right">Cantidad</TableCell>
                <TableCell align="right">Sum</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {carrito.map((item, index) => (
                <TableRow hover key={index}>
                  {totalcarrito(item.precio)}
                  <TableCell align="left">
                    <Avatar alt="Remy Sharp" src={item.imagen} />
                    {item.producto}
                  </TableCell>
                  <TableCell align="right">{item.cu}</TableCell>
                  <TableCell align="left">
                    <IconButton
                      aria-label="dowm"
                      size="small"
                      color="secondary"
                      onClick={() => eliminarprocarrito(item)}
                    >
                      <RemoveIcon fontSize="small"></RemoveIcon>
                    </IconButton>
                    {item.cantidad}
                    <IconButton
                      aria-label="up"
                      size="small"
                      color="primary"
                      onClick={() =>
                        addprocarritodos(item.producto, item.cu, item.imagen)
                      }
                    >
                      <AddIcon fontSize="small"></AddIcon>
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">
                    {ccyFormat(parseFloat(item.precio))}
                  </TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Total Pagar</TableCell>
                <TableCell align="right">
                  <p>
                    <b>{ccyFormat(parseFloat(total))}$</b>
                  </p>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <BotonesModal
          carrito={carrito}
          cerrar={props.handleClose}
          vaciarcarrito={props.vaciarcarrito}
          pagartotal={pagartotal}
        ></BotonesModal>
      </DialogActions>

      <Snackbar
        open={opensnak}
        autoHideDuration={200}
        onClose={handleClosesnak}
      >
        <Alert onClose={handleClosesnak} variant="filled" severity="success">
          Agregado al carrito
        </Alert>
      </Snackbar>
      <Snackbar
        open={opensnakerror}
        autoHideDuration={899}
        onClose={handleClosesnakerror}
      >
        <Alert onClose={handleClosesnakerror} variant="filled" severity="error">
          Articulo fuera del carrito
        </Alert>
      </Snackbar>
      <div className="carrito">
        <Car totalcantidadproductos={totalproductos}></Car>
      </div>
    </div>
  );
}
