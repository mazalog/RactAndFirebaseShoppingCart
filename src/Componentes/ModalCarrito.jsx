import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Table from "./Table";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";




export default function ModalCarrito(props) {
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <div>
      <Dialog
        fullScreen
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
          <Table
            carrito={props.carrito}
            total={0}
            vaciarcarrito={props.vaciarcarrito}
            carrito={props.carrito}
            handleClose={props.handleClose}
          ></Table>

      </Dialog>
    </div>
  );
}
