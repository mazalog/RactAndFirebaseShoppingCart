import { Snackbar } from "@material-ui/core/"
import Alert from "@material-ui/lab/Alert"

const Alerta = ({ text, alerta, cerrar, tipo }) => {
  return (
    <Snackbar
      open={alerta}
      autoHideDuration={200}
      onClose={cerrar}
    >
      <Alert onClose={cerrar} variant="filled" severity={tipo}>
        {text}
      </Alert>
    </Snackbar>
  )
}
export default Alerta