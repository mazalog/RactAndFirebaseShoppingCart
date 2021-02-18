import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

export default function Auto(props) {

  const handleInputChange=(event,values)=>{
    event.preventDefault()
     props.buscar(values)
  }
    return (
      <div style={{ width: 300 }}>
        <Autocomplete
          options={props.listaproductos}
          getOptionLabel={(option) => option.producto}
          defaultValue={[props.listaproductos[13]]}
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
