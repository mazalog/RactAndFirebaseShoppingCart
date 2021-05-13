import React,{useState} from "react"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardActions from "@material-ui/core/CardActions"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import { Paper, Box, Grid,Button } from "@material-ui/core"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { green } from "@material-ui/core/colors"
import {useStyles} from './style'
import { useLocation,} from 'wouter'
import { animateScroll as scroll } from 'react-scroll'
import InputEdit from "../Formularios/InputEditCard"
import './style.css'
import { useCarrito } from "../../hooks/useCarrito"

export default function CartaProducto(props) {
  
    const classes = useStyles()

    const theme = createMuiTheme({
    palette: {
        primary: green,
      },
    })
    const {carrito,addProCarrito,formateoCantidad}=useCarrito()

    const [,pushLocation]=useLocation()

    const verProducto=(producto)=>{
    scroll.scrollToTop()
    pushLocation(`/producto/${producto}`)
    }

    const [clicks,setClicks]=useState(0)

    const [inputValue,setInputValue]=useState(0)

    const handleInputChange=(e)=>{
     const newObjet={name:e.target.name,value:e.target.value}
     setInputValue(newObjet)
    }

    const handleClick=(item)=>{
     addProCarrito(item)
     setClicks(clicks+1)
    }


    const onClick=()=>{

      const numero=parseFloat(inputValue.value)
      
        if (isNaN(numero)){
            console.log ("Ups... " + numero + " no es un número.");
        } else {
            if (numero % 1 === 0) {
               if(numero>0){
                    const sum=true
                    const dato = carrito.filter(pro => pro.producto === inputValue.name)  
                    addProCarrito(dato[0], parseFloat(inputValue.value),sum)
                    setClicks(0)
                 }else{
                   console.log('Error')
                 }
            } else {
                console.log("Es un numero decimal");
            }
        }
    }

  return (
    <Paper elevation={15}>
      <Card className={classes.root}>
        <Box 
        margin={1}
        >
          <div className={classes.titulo}>
          <Typography variant="subtitle1" color="textSecondary" >

            {props.item.producto}
          </Typography>
          </div>
        </Box>
        <div style={{cursor:'pointer'}}>
          <CardMedia
          id="img-carta"
          className={classes.media}
          image={props.item.url}
          title={props.item.producto}
          onClick={()=>verProducto(props.item.producto)}
        /> 
        </div>

        <CardActions disableSpacing>
          <Grid container spacing={1}>
            <Grid container justify="center" item xs={6}>
              <Typography variant="subtitle2" className="mt-2">
              ${formateoCantidad(parseFloat(props.item.precio))}
              </Typography>
            </Grid>
            <Grid container justify="flex-end" item xs={6}>
            <ThemeProvider theme={theme}>
             <div className="none-xs">
               {
                 clicks===5?<>
                 </>:<>
                    <Button   
                    size="small"
                    onClick={()=>handleClick(props.item)} 
                    color="primary" 
                    endIcon={<AddShoppingCartIcon/>}
                     >Añadir</Button>
                 </>
               }
             </div>
             <div className="block-xs">
                    <IconButton  
                    size="small"
                    onClick={()=>handleClick(props.item)} 
                    color="primary" 
                     >
                      <AddShoppingCartIcon/>
                     </IconButton>
             </div>
              </ThemeProvider>
            </Grid>
                {
                  clicks===5?<Grid justify="center" item xs={12}>
                  <div className="C-input">
                  <InputEdit name={props.item.producto} onChange={handleInputChange}/>
                  <Button   
                    size="small"
                    onClick={onClick } 
                    color="primary" 
                    endIcon={<AddShoppingCartIcon/>}
                     >Añadir</Button>
                  </div>
                  </Grid>
                  :<>
                  </>
                }
          </Grid>
        </CardActions>
      </Card>
    </Paper>
  );
}
