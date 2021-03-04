import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Paper, Box, Grid, Tooltip } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import {useStyles} from './style'



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

  return (
    <Paper elevation={10}>
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
        />
        <CardActions disableSpacing>
          <Grid container spacing={1}>
            <Grid container justify="center" item xs={6}>
              <Typography variant="subtitle2" className="mt-2">
                {ccyFormat(parseFloat(props.item.precio))}$
              </Typography>
            </Grid>
            <Grid container justify="flex-end" item xs={6}>
            <ThemeProvider theme={theme}>
              <Tooltip title="Agregar al carrito">
                  <IconButton
                    aria-label="show more"
                    color="primary"
                    onClick={() =>
                      props.addprocarrito(
                        props.item
                      )
                    }
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
              </Tooltip>
              </ThemeProvider>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Paper>
  );
}
