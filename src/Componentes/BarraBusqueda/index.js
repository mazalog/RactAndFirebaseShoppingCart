import React from "react";
import { useProductos } from '../../hooks/useProductos'
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { useLocation } from 'wouter'
import { animateScroll as scroll } from 'react-scroll'

export default function Auto() {

  const [, navigate] = useLocation()

  const handleInputChange = (event, values) => {
    if (values) {
      scroll.scrollToTop()
      return navigate(`/busqueda/${values.producto}`)
    }
    event.preventDefault()
  }

  const { productos } = useProductos()

  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        options={productos}
        getOptionLabel={(option) => option.producto}
        defaultValue={[productos[13]]}
        onChange={handleInputChange}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label="¿ Que estas buscando ?"
            placeholder="Harina de trigo"
            margin="normal"
            fullWidth
            size="small"
          />
        )}
      />
    </div>
  );
}
