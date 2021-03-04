import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";


export const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "100%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    avatar: {
      backgroundColor: red[500],
    },
    titulo:{
      maxHeight:"20px",
      overflow:"hidden"
    }
  }));