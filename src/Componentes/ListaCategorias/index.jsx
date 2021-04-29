import React from 'react'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import KitchenIcon from "@material-ui/icons/Kitchen";
import Divider from '@material-ui/core/Divider'
import Social from '../Social'
import './style.css'

export default function   listaCategorias({classes,seleccionarCategoria}){

    return (
        <>
        <div className={classes.toolbar} />
        <div className="NoXs">
           <Social/>
        </div>
        <List>
          <ListItem button>
            <ListItemIcon>
              {" "}
              <KitchenIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Categorías" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={()=>seleccionarCategoria('todos')}>
            <ListItemText primary="Todos" />
          </ListItem>
          <ListItem button onClick={()=>seleccionarCategoria('Lo mas vendido')}>
          <ListItemAvatar>
              <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/406/406.png?tr=w-180"></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Lo mas Vendido" />
          </ListItem>
          <ListItem button onClick={()=>seleccionarCategoria('combos')}>
          <ListItemAvatar>
              <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/2822/combo_carnes_jr-2.png?tr=w-180"></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Combos" />
          </ListItem>
          <ListItem button onClick={()=>seleccionarCategoria('viveres')}>
          <ListItemAvatar>
              <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/539/539.png?tr=w-180"></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Viveres" />
          </ListItem>
          <ListItem  onClick={()=>seleccionarCategoria('proteinas')} button>
          <ListItemAvatar>
              <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/1826/1826-Docena-Huevos.png?tr=w-180"></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Proteinas" />
          </ListItem>
          <ListItem button  onClick={()=>seleccionarCategoria('charcuteria')}>
          <ListItemAvatar>
              <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/6519/Queso_Blanco_Paisa_Rebanado_500Grs.png?tr=w-180"></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Charcuteria" />
          </ListItem>
          <ListItem button  onClick={()=>seleccionarCategoria('frutas y verduras')}>
          <ListItemAvatar>
              <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/1016/1016.png?tr=w-180"></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Frutas y verduras" />
            
          </ListItem>
          <ListItem button  onClick={()=>seleccionarCategoria('reposteria')}>
          <ListItemAvatar>
              <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/1814/1814.png?tr=w-180"></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Reposteria" />
          </ListItem>
          <ListItem button  onClick={()=>seleccionarCategoria('bebidas')}>
          <ListItemAvatar>
              <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/1339/1339_Golden_Kolita_1.5_Lts.png?tr=w-180"></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Bebidas" />
          </ListItem>
          <ListItem button  onClick={()=>seleccionarCategoria('licores')}>
          <ListItemAvatar>
              <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/1104/Polar_.png?tr=w-180"></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Licores" />
          </ListItem>
          <ListItem button  onClick={()=>seleccionarCategoria('panaderia')}>
          <ListItemAvatar>
              <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/929/929.png?tr=w-180"></Avatar>
            </ListItemAvatar>
          
            <ListItemText primary="Panaderia" />
          </ListItem>
          <ListItem button  onClick={()=>seleccionarCategoria('limpieza e higiene')}>
          <ListItemAvatar>
              <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/495/495_Shampoo__Drene_350ml_.png?tr=w-180"></Avatar>
            </ListItemAvatar>     
            <ListItemText primary="Limpieza e higiene" />
          </ListItem>
          <ListItem button  onClick={()=>seleccionarCategoria('mascotas')}>
          <ListItemAvatar>
              <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/12413/gatsy-pescado-1kg_lf.png?tr=w-180">
              </Avatar>
            </ListItemAvatar>  
            <ListItemText primary="Mascotas" />
          </ListItem>
          <ListItem button  onClick={()=>seleccionarCategoria('al mayor')}>
          <ListItemAvatar>
              <Avatar src="https://ik.imagekit.io/xdqklh2jgw/media/products/11440/Bulto_harina_de_trigo_ludante_Robin_Hood_1kg_20uds.png?tr=w-180">
              </Avatar>
            </ListItemAvatar>   
            <ListItemText primary="Al mayor" />
          </ListItem>
        </List>
      </>
    )
}

