import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import HomeIcon from '@material-ui/icons/Home'
import { useLocation } from 'wouter'


const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}))

export default function IconBreadcrumbs() {
  const classes = useStyles();

  const [,navigate]=useLocation()

  function handleClick(event) {
  event.preventDefault();
  navigate('/')
  }

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="#" onClick={handleClick} className={classes.link}>
        <HomeIcon className={classes.icon} />
        MzHogar
      </Link>
      <Typography color="textPrimary" className={classes.link}>
        
      </Typography>
    </Breadcrumbs>
  )
}
