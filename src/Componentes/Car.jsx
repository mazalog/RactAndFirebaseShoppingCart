import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Fab from '@material-ui/core/Fab';
import {createMuiTheme,ThemeProvider} from '@material-ui/core/styles'

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const theme=createMuiTheme({
  palette:{
    primary:{
      main: "#fff176",
    }
  }
})

export default function CustomizedBadges(props) {
  
  return (
    <ThemeProvider theme={theme}>
    <IconButton aria-label="cart" onClick={props.handleClickOpen} color="primary" >
      <StyledBadge badgeContent={props.totalcantidadproductos} color="secondary">
        <Fab color="primary">
        <ShoppingCartIcon fontSize="large" />
        </Fab>
      </StyledBadge>
    </IconButton>
    </ThemeProvider>

  );
}
