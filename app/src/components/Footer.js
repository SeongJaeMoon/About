import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  footer: {
    // marginTop: '.5vh',
    // marginBottom: '1vh',
    // padding: '.75vw',
    // height: '3vh'
  },
  text: {
    fontSize: '3vw',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1vw',
    }
  },
  copyright: {
    fontSize: '3vw',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1vw',
    }
  },
  cookieWrap: {
    textAlign: 'center'
  }
}));

export function Copyright() {
  const classes = useStyles();

  return (
    <Typography className={classes.copyright} variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Seongjae Moon
      </Link>{' '}{new Date().getFullYear()}{'.'}
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();

  const onHandleCookieSite = () => {
    window.open('https://www.cookiesandyou.com/');
  }

  return (
    <Grid container className={classes.footer}>
      {/* <Grid item xs={12}>
        <Typography
          className={classes.text}
          variant="subtitle2" 
          color="textSecondary" 
          align="center">
          
        </Typography>
        <Typography
          className={classes.text}
          variant="subtitle2" 
          color="textSecondary" 
          align="center">
          
        </Typography>
        <Typography
          className={classes.text}
          variant="subtitle2" 
          color="textSecondary" 
          align="center">
          
        </Typography>
      </Grid> */}
      <Grid item xs={12}>
        <Box pt={3} className={classes.cookieWrap}>
          <Button onClick={onHandleCookieSite}>
            Cookie Policy
          </Button>
        </Box>
        <Box pb={3}>
          <Copyright/>
        </Box>
      </Grid>
    </Grid>
  )
}