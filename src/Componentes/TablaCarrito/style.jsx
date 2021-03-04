import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 500,
    },
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  }));

