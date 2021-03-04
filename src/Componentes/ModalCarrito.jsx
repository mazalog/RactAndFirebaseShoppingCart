import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Table from "./TablaCarrito";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";


export default function ModalCarrito(props) {
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Dialog
        width={fullScreen}
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
          <Table
            handleClose={props.handleClose}
          />
      </Dialog>
    </div>
  );
}
