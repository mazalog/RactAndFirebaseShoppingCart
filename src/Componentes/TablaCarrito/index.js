import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Paper, Grid, IconButton, Tooltip } from "@material-ui/core/";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import BotonesCarrito from "../BotonesCarrito";
import Alerta from '../Alerta'
import { useCarrito } from "../../hooks/useCarrito";
import { useStyles } from './style'

export default function SpanningTable(props) {


  const classes = useStyles();

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  const { carrito,
    addProCarrito,
    eliminarProCarrito,
    alertaAddProducto,
    cerrarAlertaAddProducto,
    alertaDeleteProducto,
    cerrarAlertaDeleteProducto,
    nCantidad,
    nPrecio,
    pagar
  } = useCarrito()

  const eliminarprocarrito = (producto) => {
    eliminarProCarrito(producto)
  }



  return (
    <div>
      <DialogTitle id="form-dialog-title">
        <Grid container spacing={1}>
          <Grid container justify="flex-start" item xs={8}>
            <h4 onClick={pagar} style={{ fontWeight: '600', color: 'gray', cursor: 'pointer' }}> {ccyFormat(parseFloat(nPrecio))}$ de  ({nCantidad}) articulos</h4>
          </Grid>
          <Grid container justify="flex-end" item xs={4}>
            <Tooltip title="Cerrar Carrito">
              <IconButton
                aria-label="Cerrar carrito"
                color="secondary"
                onClick={() => props.handleClose()}
              >
                <CloseIcon></CloseIcon>
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <div style={{ height: '65vh', width: '100%', padding: 0, overflow: 'auto', borderBottom: '1px solid #b9b5b5' }}>
          <Table aria-label="spanning table">
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
                  <TableCell align="left">
                    <Avatar alt="Remy Sharp" src={item.url} />
                    {item.producto}
                  </TableCell>
                  <TableCell align="right">{item.precio}</TableCell>
                  <TableCell align="left">
                    <IconButton
                      aria-label="dowm"
                      size="small"
                      color="initial"
                      onClick={() => eliminarprocarrito(item)}
                    >
                      <RemoveIcon fontSize="small"></RemoveIcon>
                    </IconButton>
                    {item.cantidad}
                    <IconButton
                      aria-label="up"
                      size="small"
                      color="initial"
                      onClick={() =>
                        addProCarrito(item)
                      }
                    >
                      <AddIcon fontSize="small"></AddIcon>
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">
                    {ccyFormat(parseFloat(item.cantidad * item.precio))}
                  </TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell colSpan={1}>Total Pagar</TableCell>
                <TableCell align="left">
                  <p>
                    <b>{ccyFormat(parseFloat(nPrecio))}$</b>
                  </p>
                </TableCell>
                <TableCell colSpan={2}></TableCell>

              </TableRow>
            </TableBody>

          </Table>
        </div>

      </DialogContent>

      <DialogActions>
        <BotonesCarrito
          carrito={carrito}
          cerrar={props.handleClose}
          pagartotal={nPrecio}
        />
      </DialogActions>


      <Alerta text="Agregado al carrito" alerta={alertaAddProducto} cerrar={cerrarAlertaAddProducto} tipo="success" />
      <Alerta text="Articulo fuera del carrito" alerta={alertaDeleteProducto} cerrar={cerrarAlertaDeleteProducto} tipo="error" />

    </div >
  );
}
