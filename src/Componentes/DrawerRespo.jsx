import React,{useState} from "react";
import PropTypes from "prop-types";
import { CssBaseline, Divider, Drawer, Hidden } from "@material-ui/core/";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import KitchenIcon from "@material-ui/icons/Kitchen";
import Productos from "./Productos";
import AppBar from "./AppBar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 10,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const listaproductos = [
    {
      producto: "Mayonesa Mavesa 900gr",
  
    },
    {
      producto: "Harina Juana 1kg",
  
    },
    {
      producto: "Arroz Mari tradicional",
  
    },
    {
      producto: "Docena de Huevo",
  
    },
    {
      producto: "Aceite 1lt Mazeite",
  
    },
    {
      producto: "Harina PAN 1kg ",
   
    },
    {
      producto: "Golden Kolita 1.5 Lts",
  
    },
    {
      producto: "Tody 400 gr",
  
    },
    {
      producto: "Coca cola 2lt",
  
    },
    {
      producto: "Leche descremada 1 lts",
  
    },
    {
      producto: "Riquesa Chedar 300gr",
  
    },
    {
      producto: "Margarina Mavesa 500gr",
  
    },
    {
      producto: "Mezcla para Torta Renata",
  
    },
  
    {
      producto: "Harina de Trigo Doña Maria",
  
    },
    {
      producto: "Papel Higienico Rosal Plis",
    
    },
    {
      producto: "Jabon Azul Las Llaves",
  
    },
    {
      producto: "Shampoo Drene 350ml",
  
    },
    {
      producto: "Galletas Charmy Fresa",
  
    },
    {
      producto: "Jugo de Naranja 1.5 lt Yukery",
  
    },
  
    {
      producto: "Cerveza Polarcita x 36",
  
    },
  
    {
      producto: "Mortadela Especial Plumrose",
  
    },
  
    {
      producto: "Queso Paisa Blanco 500gr",
  
    },
  
    {
      producto: "Pechuga de Pollo 500gr",
  
    },
    {
      producto: "Combo carne Premiun",
  
    },
  
    {
      producto: "Harina de maiz y arroz Pan ",
  
    },
    {
      producto: "Corn Flakes 230 gr ",
  
    },
    {
      producto: "Cambur Criollo",
  
    },
  ];
  const [busqueda,setbusqueda]=useState("nula")
  const buscar=(b)=>{
    console.log(b)
    setbusqueda(b)
  }

  const [categoria,setcategoria]=useState("todos") 
  const categorias=(c)=>{
      setcategoria(c)
      setbusqueda("nula")
  }


  const drawer = (
    <div>
      <div className={classes.toolbar} />

      <List>
        <ListItem button>
          <ListItemIcon>
            {" "}
            <KitchenIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Categorias" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={()=>categorias('todos')}>
          <ListItemText primary="Todos" />
        </ListItem>
        <ListItem button onClick={()=>categorias('Lo mas vendido')}>
        <ListItemAvatar>
            <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/406/406.png?tr=w-180"></Avatar>
          </ListItemAvatar>
          <ListItemText primary="Lo mas Vendido" />
        </ListItem>
        <ListItem button onClick={()=>categorias('combos')}>
        <ListItemAvatar>
            <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/2822/combo_carnes_jr-2.png?tr=w-180"></Avatar>
          </ListItemAvatar>
          <ListItemText primary="Combos" />
        </ListItem>
        <ListItem button onClick={()=>categorias('viveres')}>
        <ListItemAvatar>
            <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/539/539.png?tr=w-180"></Avatar>
          </ListItemAvatar>
          <ListItemText primary="Viveres" />
        </ListItem>
        <ListItem  onClick={()=>categorias('proteinas')} button>
        <ListItemAvatar>
            <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/1826/1826-Docena-Huevos.png?tr=w-180"></Avatar>
          </ListItemAvatar>
          <ListItemText primary="Proteinas" />
        </ListItem>
        <ListItem button  onClick={()=>categorias('charcuteria')}>
        <ListItemAvatar>
            <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/6519/Queso_Blanco_Paisa_Rebanado_500Grs.png?tr=w-180"></Avatar>
          </ListItemAvatar>
          <ListItemText primary="Charcuteria" />
        </ListItem>
        <ListItem button  onClick={()=>categorias('frutas y verduras')}>
        <ListItemAvatar>
            <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/1016/1016.png?tr=w-180"></Avatar>
          </ListItemAvatar>
          <ListItemText primary="Frutas y verduras" />
          
        </ListItem>
        <ListItem button  onClick={()=>categorias('reposteria')}>
        <ListItemAvatar>
            <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/1814/1814.png?tr=w-180"></Avatar>
          </ListItemAvatar>
          <ListItemText primary="Reposteria" />
        </ListItem>
        <ListItem button  onClick={()=>categorias('bebidas')}>
        <ListItemAvatar>
            <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/1339/1339_Golden_Kolita_1.5_Lts.png?tr=w-180"></Avatar>
          </ListItemAvatar>
          <ListItemText primary="Bebidas" />
        </ListItem>
        <ListItem button  onClick={()=>categorias('licores')}>
        <ListItemAvatar>
            <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/1104/Polar_.png?tr=w-180"></Avatar>
          </ListItemAvatar>
          <ListItemText primary="Licores" />
        </ListItem>
        <ListItem button  onClick={()=>categorias('panaderia')}>
        <ListItemAvatar>
            <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/929/929.png?tr=w-180"></Avatar>
          </ListItemAvatar>
        
          <ListItemText primary="Panaderia" />
        </ListItem>
        <ListItem button  onClick={()=>categorias('limpieza e higiene')}>
        <ListItemAvatar>
            <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/495/495_Shampoo__Drene_350ml_.png?tr=w-180"></Avatar>
          </ListItemAvatar>     
          <ListItemText primary="Limpieza e higiene" />
        </ListItem>
        <ListItem button  onClick={()=>categorias('mascotas')}>
        <ListItemAvatar>
            <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/12413/gatsy-pescado-1kg_lf.png?tr=w-180">
            </Avatar>
          </ListItemAvatar>  
          <ListItemText primary="Mascotas" />
        </ListItem>
        <ListItem button  onClick={()=>categorias('al mayor')}>
        <ListItemAvatar>
            <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/11440/Bulto_harina_de_trigo_ludante_Robin_Hood_1kg_20uds.png?tr=w-180">
            </Avatar>
          </ListItemAvatar>   
          <ListItemText primary="Al mayor" />
 
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        handleDrawerToggle={handleDrawerToggle}
        position="fixed"
        clase={classes.appBar}
        listaproductos={listaproductos}
        buscar={buscar}
      ></AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Productos
          categoria={categoria}
          handleDrawerToggle={handleDrawerToggle}
          clase={classes.appBar}
          busqueda={busqueda}
        ></Productos>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
