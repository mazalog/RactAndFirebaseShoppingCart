import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {useStyles} from './style'
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import {yellow} from '@material-ui/core/colors'
import KitchenIcon from '@material-ui/icons/Kitchen';
import Autocomplete from '../Autocomplete'

export default function SearchAppBar(props) {
  
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#fff176",
      },
      secondary: yellow,
    },
  });

   const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="fixed" className={props.clase}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={()=>props.handleDrawerToggle()}
            >
              <KitchenIcon />
            </IconButton>
            <Typography
              className={classes.title}
              variant="h6"
              noWrap
            >
            MzHogar
            </Typography>
              <Autocomplete buscar={props.buscar}></Autocomplete>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}
