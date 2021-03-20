import React from 'react';
// import './styles.scss';
import GoogleIcon from './../../../icons/Google';
import FacebookIcon from './../../../icons/Facebook';

import {
  Button,
  Box,
  makeStyles,
  Grid
} from '@material-ui/core';

const useStyles = makeStyles({
  login:{
    width: '100%',
    display: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    fontSize: '1.5rem',
    display: 'block',
    fontWeight: 300,
    textTransform: 'uppercase',
    padding: '1rem 10px',
    cursor: 'pointer',
    outline: 'none',
    color: 'white',
  },
  googleLogin:{
    color: 'white'
  }
})


export const LoginButton = ({ children, ...otherProps }) => {
  const classes = useStyles();
  return (
    <Box my={2}>
    <Button 
    className={classes.login} 
    color="primary"
    fullWidth
    size="large"
    variant="contained"
    type="submit"
    {...otherProps}>
      {children}
    </Button>
    </Box>
  );
}

export const GoogleButton = ({children, ...otherProps}) => {
  const classes = useStyles();
  return(
    <Grid
    item
    xs={12}
    // md={6}
  >
    <Button
     startIcon={<GoogleIcon />}
     fullWidth
     size="large"
     variant="contained"
     {...otherProps}>
     {children}
    </Button>
    </Grid>

  )
}

export const FacebookButton = ({children, ...otherProps}) => {
  const classes = useStyles();
  return(
    <Grid
    item
    xs={12}
    // md={6}
  >
    <Button
     startIcon={<FacebookIcon />}
     fullWidth
     size="large"
     variant="contained"
     {...otherProps}>
     {children}
    </Button>
    </Grid>

  )
}



export default LoginButton;