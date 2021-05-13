import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { IconButton, } from "@material-ui/core/";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Avatar from "@material-ui/core/Avatar";
import BotonesCarrito from "../BotonesCarrito";
import CheckIcon from '@material-ui/icons/Check'
import Alerta from '../Alerta'
import { useCarrito } from "../../hooks/useCarrito";
import InputEdit from "../Formularios/InputEdit";
import HeaderTablaCarrito from "../HeaderTablaCarrito";

export default function TablaCarrito() {

  const { carrito,
    addProCarrito,
    eliminarProCarrito,
    alertaAddProducto,
    cerrarAlertaAddProducto,
    alertaDeleteProducto,
    cerrarAlertaDeleteProducto,
    nPrecio,
    formateoCantidad
  } = useCarrito()

  const eliminarprocarrito = (producto) => {
    eliminarProCarrito(producto)
  }

  const [clickadd, setClickAdd] = useState(0)

  const handleInputChange = (e) => {

    if (e.target.value === '') e.target.value = parseFloat(0)
    const numero = parseFloat(e.target.value)

    if (isNaN(numero)) {
      // console.log('No es un numero')
    } else {
      if (numero % 1 === 0) {
        if (e.target.value >= 0) {
          const dato = carrito.filter(pro => pro.producto === e.target.name)
          if (dato[0].cantidad < e.target.value) {
            addProCarrito(dato[0], parseFloat(e.target.value))
          } else {
            const cant = e.target.value ? e.target.value : 0
            eliminarProCarrito(dato[0], parseFloat(cant))
          }
        }
      } else {
        // console.log("Es un numero decimal");
      }
    }
  }

  const handleResetCLick = () => {
    setClickAdd(0)
  }

  const handleClickadd = (item) => {
    setClickAdd(clickadd + 1)
    addProCarrito(item)
  }

  const handleClickRes = (item) => {
    setClickAdd(clickadd + 1)
    eliminarprocarrito(item)
  }

  return (
    <div>
      <DialogTitle id="form-dialog-title">
        <HeaderTablaCarrito />
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
                <TableCell align="left">Cantidad</TableCell>
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
                  <TableCell align="right">${item.precio}</TableCell>
                  <TableCell align="left">

                    {
                      clickadd === 5 ? <><InputEdit value={item.cantidad} name={item.producto} onChange={handleInputChange} />
                        <IconButton
                          size="small"
                          color="initial"
                          onClick={handleResetCLick}
                        >
                          <CheckIcon fontSize="small" />
                        </IconButton>
                      </> : <>
                        <IconButton
                          aria-label="dowm"
                          size="small"
                          color="initial"
                          onClick={() => handleClickRes(item)}
                        >
                          <RemoveIcon fontSize="small"></RemoveIcon>
                        </IconButton>
                        {item.cantidad}
                        <IconButton
                          aria-label="up"
                          size="small"
                          color="initial"
                          onClick={() =>
                            handleClickadd(item)
                          }
                        >
                          <AddIcon fontSize="small"></AddIcon>
                        </IconButton>
                      </>
                    }
                  </TableCell>
                  <TableCell align="right">
                    ${formateoCantidad(parseFloat(item.total))}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={1}>Total Pagar</TableCell>
                <TableCell align="left">
                  <p>
                    <b>{nPrecio}$</b>
                  </p>
                </TableCell>
                <TableCell colSpan={2}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </DialogContent>

      <DialogActions>
        <BotonesCarrito />
      </DialogActions>

      <Alerta text="Agregado al carrito" alerta={alertaAddProducto} cerrar={cerrarAlertaAddProducto} tipo="success" />
      <Alerta text="Articulo fuera del carrito" alerta={alertaDeleteProducto} cerrar={cerrarAlertaDeleteProducto} tipo="error" />

    </div >
  );
}
