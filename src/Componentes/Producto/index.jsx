import React,{useState} from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Paper, Box, Grid, Tooltip,Button } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import {useStyles} from './style'
import {useLocation,} from 'wouter'
import { animateScroll as scroll } from 'react-scroll';
import InputEdit from "../Formularios/InputEditCard";
import './style.css'

export default function RecipeReviewCard(props) {
  
    const classes = useStyles();

    const theme = createMuiTheme({
    palette: {
        primary: green,
      },
    });
    function ccyFormat(num) {
      return `${num.toFixed(2)}`;
    }

    const [,navigate]=useLocation()

    const verProducto=(producto)=>{
        scroll.scrollToTop()
    navigate(`/producto/${producto}`)
    }

    const [clicks,setClicks]=useState(0)

    const [inputValue,setInputValue]=useState(0)

    const handleInputChange=(e)=>{
     const newObjet={name:e.target.name,value:e.target.value}
     setInputValue(newObjet)
    }

    const handleClick=(item)=>{
     props.addprocarrito(item)
     setClicks(clicks+1)
    }

    const onClick=()=>{
      if(parseFloat(inputValue.value)>0){
        props.onClick(inputValue)
        setClicks(0)
      }else{
        console.log('Error')
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
        <CardMedia
          id="img-carta"
          className={classes.media}
          image={props.item.url}
          title={props.item.producto}
          onClick={()=>verProducto(props.item.producto)}
        />
        <CardActions disableSpacing>
          <Grid container spacing={1}>
            <Grid container justify="center" item xs={6}>
              <Typography variant="subtitle2" className="mt-2">
              ${ccyFormat(parseFloat(props.item.precio))}
              </Typography>
            </Grid>
            <Grid container justify="flex-end" item xs={6}>
            <ThemeProvider theme={theme}>
             <div className="none-xs">
               {
                 clicks===5?<>
                 </>:<>
            <Tooltip title="Agregar al carrito">
                    <Button   
                    size="small"
                    onClick={()=>handleClick(props.item)} 
                    color="primary" 
                    endIcon={<AddShoppingCartIcon/>}
                     >Añadir</Button>
              </Tooltip>
                 </>
               }
             </div>
             <div className="block-xs">
             <Tooltip title="Agregar al carrito">
                    <IconButton  
                    size="small"
                    onClick={()=>handleClick(props.item)} 
                    color="primary" 
                     >
                      <AddShoppingCartIcon/>
                     </IconButton>
              </Tooltip>
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
