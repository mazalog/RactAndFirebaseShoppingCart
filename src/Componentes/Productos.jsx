import React, { Fragment, useState, Suspense } from "react";
import {
  Grid,
  Box,
  Typography,
  IconButton,
  Snackbar,
  Fab,
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import AddIcon from "@material-ui/icons/PostAdd";
import MenuIcon from "@material-ui/icons/Menu";
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from "./Card";
import Car from "./Car";
import ModalCarrito from "./ModalCarrito";
import Bread from "./Bread";

const Productos = (props) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#fff176",
      },
    },
  });

  const listaproductos = [
    {
      producto: "Mayonesa Mavesa 900gr",
      precio: 7.19,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/541/541.png?tr=h-220",
      categoria: "viveres",
    },
    {
      producto: "Harina Juana 1kg",
      precio: 1.79,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/848/848.png?tr=h-220",
      categoria: "viveres",
    },
    {
      producto: "Arroz Mari tradicional",
      precio: 1.45,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/2535/Mary_arroz_Tradicional_.png?tr=w-180",
      categoria: "viveres",
    },
    {
      producto: "Docena de Huevo",
      precio: 2.5,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/1826/1826-Docena-Huevos.png?tr=w-180",
      categoria: "proteinas",
    },
    {
      producto: "Aceite 1lt Mazeite",
      precio: 3.23,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/362/362.png?tr=w-180",
      categoria: "viveres",
    },
    {
      producto: "Harina PAN 1kg ",
      precio: 1.17,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/406/406.png?tr=w-180",
      categoria: "viveres",
    },
    {
      producto: "Golden Kolita 1.5 Lts",
      precio: 1.94,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/1339/1339_Golden_Kolita_1.5_Lts.png?tr=w-180",
      categoria: "bebidas",
    },
    {
      producto: "Tody 400 gr",
      precio: 6.66,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/446/446.png?tr=w-180",
      categoria: "viveres",
    },
    {
      producto: "Coca cola 2lt",
      precio: 3.61,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/384/Coca_cola_2_litros.png?tr=w-180",
      categoria: "bebidas",
    },
    {
      producto: "Leche descremada 1 lts",
      precio: 2.65,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/2823/Leche_Descremada_Purisima.png?tr=w-180",
      categoria: "bebidas",
    },
    {
      producto: "Riquesa Chedar 300gr",
      precio: 6.25,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/2679/rikesa.png?tr=h-220",
      categoria: "viveres",
    },
    {
      producto: "Margarina Mavesa 500gr",
      precio: 3.06,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/539/539.png?tr=w-180",
      categoria: "viveres",
    },
    {
      producto: "Mezcla para Torta Renata",
      precio: 2.12,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/1814/1814.png?tr=w-180",
      categoria: "reposteria",
    },

    {
      producto: "Harina de Trigo Doña Maria",
      precio: 1.8,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/1038/1038.png?tr=w-180",
      categoria: "viveres",
    },
    {
      producto: "Papel Higienico Rosal Plis",
      precio: 1.5,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/3023/Rosal_plus.png?tr=w-180",
      categoria: "limpieza e higiene",
    },
    {
      producto: "Jabon Azul Las Llaves",
      precio: 1.38,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/1041/1041_Jab%C3%B3n_azul_Las_Llaves_250gr_.png?tr=w-180",
      categoria: "limpieza e higiene",
    },
    {
      producto: "Shampoo Drene 350ml",
      precio: 3,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/495/495_Shampoo__Drene_350ml_.png?tr=w-180",
      categoria: "limpieza e higiene",
    },
    {
      producto: "Galletas Charmy Fresa",
      precio: 1.38,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/1270/Charmy_fresa.png?tr=w-180",
      categoria: "viveres",
    },
    {
      producto: "Jugo de Naranja 1.5 lt Yukery",
      precio: 3.04,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/411/411_Jugo_de_Naranja_Yukery_1.5lt.png?tr=w-180",
      categoria: "bebidas",
    },

    {
      producto: "Cerveza Polarcita x 36",
      precio: 29.99,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/1104/Polar_.png?tr=w-180",
      categoria: "licores",
    },

    {
      producto: "Mortadela Especial Plumrose",
      precio: 3.75,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/1069/Mortadela_especial_plumrose.png?tr=w-180",
      categoria: "charcuteria",
    },

    {
      producto: "Queso Paisa Blanco 500gr",
      precio: 4.48,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/6519/Queso_Blanco_Paisa_Rebanado_500Grs.png?tr=w-180",
      categoria: "charcuteria",
    },

    {
      producto: "Pechuga de Pollo 500gr",
      precio: 1.96,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/1012/1012-PechugaDePollo.png?tr=w-180",
      categoria: "proteinas",
    },
    {
      producto: "Combo carne Premiun",
      precio: 20.81,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/2822/combo_carnes_jr-2.png?tr=w-180",
      categoria: "combos",
    },

    {
      producto: "Harina de maiz y arroz Pan ",
      precio: 1.5,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/11630/Harina_ma%C3%ADz_y_arroz_PAN_1_kg.png?tr=w-180",
      categoria: "viveres",
    },
    {
      producto: "Corn Flakes 230 gr ",
      precio: 2,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/2685/Corn_Flakes_230g.png?tr=w-180",
      categoria: "viveres",
    },
    {
      producto: "Cambur Criollo",
      precio: 0.96,
      url:
        "https://ik.imagekit.io/xdqklh2jgw/media/products/1016/1016.png?tr=w-180",
      categoria: "frutas y verduras",
    },
  ];
  const [producto] = useState(listaproductos);

  const [carrito, setcarrito] = useState([]);
  const addprocarrito = (
    datoprecio,
    datoproducto,
    cantidad,
    cadauno,
    image
  ) => {
    var data = {
      producto: datoproducto,
      precio: datoprecio,
      cantidad: cantidad,
      cu: parseFloat(cadauno),
      imagen: image,
    };
    if (carrito.length !== 0) {
      var seguir = true;
      carrito.forEach((carro) => {
        if (carro.producto === datoproducto) {
          seguir = false;
          var totalactual = parseFloat(carro.precio) + parseFloat(datoprecio);
          var totalcantidad = parseFloat(carro.cantidad) + parseFloat(cantidad);
          const dato = {
            producto: datoproducto,
            precio: totalactual,
            cantidad: totalcantidad,
            cu: parseFloat(cadauno),
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
      if (seguir) {
        setcarrito([...carrito, data]);
        handleClickOpensnak();
      }
    } else {
      setcarrito([...carrito, data]);
      handleClickOpensnak();
    }
  };

  const vaciarcarrito = () => {
    setcarrito([]);
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

  const [opensnak, setOpensnak] = useState(false);
  const handleClickOpensnak = () => {
    setOpensnak(true);
  };
  const handleClosesnak = () => {
    setOpensnak(false);
  };

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (item) => {
    setcarrito(item);
    setOpen(false);
  };

  const determinarcontenido = () => {
    if(props.busqueda===null || props.busqueda==="nula"){
      if (props.categoria === "todos") {
        return (
          <>
            {producto.map((item, index) => (
              <Grid key={index} item xs={6} sm={6} md={3}>
                <Card item={item} addprocarrito={addprocarrito}></Card>
              </Grid>
            ))}
          </>
        );
      } else {
        return (
          <>{producto.map((item, index) => determinarcategoria(item, index))}</>
        );
      }
    }else{

      return(
        <>{producto.map((item, index) => buscarproducto(item, index))}</>
      )

    }
  }

  const buscarproducto = (item, index) => {
    if (item.producto === props.busqueda.producto) {
      return (
        <Grid key={index} item xs={6} sm={6} md={3}>
          <Card item={item} addprocarrito={addprocarrito}></Card>
        </Grid>
      );
    }
  };

  const determinarcategoria = (item, index) => {
    if (item.categoria === props.categoria) {
      return (
        <Grid key={index} item xs={6} sm={6} md={3}>
          <Card item={item} addprocarrito={addprocarrito}></Card>
        </Grid>
      );
    }
  };

  return (
    <Fragment>
      <div className="container">
        <Grid container spacing={1}>
          <Grid container item xs={12}>
            <Box marginY={6}>
              <Typography variant="h6" component="b" color="initial">
                <Bread categoria={props.categoria}></Bread>
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {producto.length !== 0 ? (
          <Grid container spacing={3}>
            <Suspense
              fallback={
                <Box
                  display="flex"
                  justifyContent="center"
                  m={1}
                  p={1}
                  bgcolor="background.paper"
                >
                  <CircularProgress />
                </Box>
              }
            >
              {determinarcontenido()}
            </Suspense>
          </Grid>
        ) : (
          <Alert severity="error">Sin articulos que mostrar.</Alert>
        )}

        <Grid container spacing={1}>
          <Grid container justify="center" item xs={12}>
            <Box margin={4} marginBottom={15}>
              <IconButton aria-label="Mas" color="primary">
                <AddIcon fontSize="large"></AddIcon>
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </div>
      <div className="menu">
        <IconButton
          onClick={() => props.handleDrawerToggle()}
          aria-label="Categorias"
          className={props.clase}
        >
          <ThemeProvider theme={theme}>
            <Fab color="primary">
              <MenuIcon></MenuIcon>
            </Fab>
          </ThemeProvider>
        </IconButton>
      </div>

      <div className="carrito">
        <Car
          handleClickOpen={handleClickOpen}
          totalcantidadproductos={totalproductos}
        ></Car>
      </div>

      <div>
        <ModalCarrito
          carrito={carrito}
          totalcantidadproductos={totalproductos}
          handleClose={handleClose}
          open={open}
          vaciarcarrito={vaciarcarrito}
        ></ModalCarrito>
      </div>
      <Snackbar
        open={opensnak}
        autoHideDuration={600}
        onClose={handleClosesnak}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClosesnak} variant="filled" severity="success">
          Agregado al carrito
        </Alert>
      </Snackbar>
    </Fragment>
  );
};
export default Productos;
