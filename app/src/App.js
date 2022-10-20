import React from "react";
import AppleSDGothicNeoTttf from '~/styles/fonts/AppleSDGothicNeoT.ttf';
import AppleSDGothicNeoLttf from '~/styles/fonts/AppleSDGothicNeoL.ttf';
import AppleSDGothicNeoULttf from '~/styles/fonts/AppleSDGothicNeoUL.ttf';
import AppleSDGothicNeoMttf from '~/styles/fonts/AppleSDGothicNeoM.ttf';
import AppleSDGothicNeoRttf from '~/styles/fonts/AppleSDGothicNeoR.ttf';
import AppleSDGothicNeoSBttf from '~/styles/fonts/AppleSDGothicNeoSB.ttf';
import AppleSDGothicNeoBttf from '~/styles/fonts/AppleSDGothicNeoB.ttf';
import AppleSDGothicNeoEBttf from '~/styles/fonts/AppleSDGothicNeoEB.ttf';
import AppleSDGothicNeoHttf from '~/styles/fonts/AppleSDGothicNeoH.ttf';
import { useLocation, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { AnimatePresence } from 'framer-motion';

import CssBaseline from '@material-ui/core/CssBaseline';
import loadable from '@loadable/component';

import Home from '~/pages/index';
const Page404 = loadable(() => import('~/pages/Page404'));

const AppleSDGothicNeoT = {
  fontFamily: 'AppleSDGothicNeo',
  fontStyle: 'normal',
  fontWeight: 100,
  fontDisplay: 'swap',
  src: `
    local('AppleSDGothicNeo-Thin'),
    url(${AppleSDGothicNeoTttf}) format('truetype')
  `
}

const AppleSDGothicNeoUL = {
  fontFamily: 'AppleSDGothicNeo',
  fontStyle: 'normal',
  fontWeight: 200,
  fontDisplay: 'swap',
  src: `
    local('AppleSDGothicNeo-Ultra-Light'),
    url(${AppleSDGothicNeoULttf}) format('truetype')
  `
}

const AppleSDGothicNeoL = {
  fontFamily: 'AppleSDGothicNeo',
  fontStyle: 'normal',
  fontWeight: 300,
  fontDisplay: 'swap',
  src: `
    local('AppleSDGothicNeo-Light'),
    url(${AppleSDGothicNeoLttf}) format('truetype')
  `
}

const AppleSDGothicNeoR = {
  fontFamily: 'AppleSDGothicNeo',
  fontStyle: 'normal',
  fontWeight: 400,
  fontDisplay: 'swap',
  src: `
    local('AppleSDGothicNeo-Regular'),
    url(${AppleSDGothicNeoRttf}) format('truetype')
  `
}

const AppleSDGothicNeoM = {
  fontFamily: 'AppleSDGothicNeo',
  fontStyle: 'normal',
  fontWeight: 500,
  fontDisplay: 'swap',
  src: `
    local('AppleSDGothicNeo-Medium'),
    url(${AppleSDGothicNeoMttf}) format('truetype')
  `
}

const AppleSDGothicNeoSB ={
  fontFamily: 'AppleSDGothicNeo',
  fontStyle: 'normal',
  fontWeight: 600,
  fontDisplay: 'swap',
  src: `
    local('AppleSDGothicNeo-Semi-Bold'),
    url(${AppleSDGothicNeoSBttf}) format('truetype')
  `
}

const AppleSDGothicNeoB ={
  fontFamily: 'AppleSDGothicNeo',
  fontStyle: 'normal',
  fontWeight: 700,
  fontDisplay: 'swap',
  src: `
    local('AppleSDGothicNeo-Bold'),
    url(${AppleSDGothicNeoBttf}) format('truetype')
  `
}

const AppleSDGothicNeoEB = {
  fontFamily: 'AppleSDGothicNeo',
  fontStyle: 'normal',
  fontWeight: 800,
  fontDisplay: 'swap',
  src: `
    local('AppleSDGothicNeo-Extra-Bold'),
    url(${AppleSDGothicNeoEBttf}) format('truetype')
  `
}

const AppleSDGothicNeoH = {
  fontFamily: 'AppleSDGothicNeo',
  fontStyle: 'normal',
  fontWeight: 900,
  fontDisplay: 'swap',
  src: `
    local('AppleSDGothicNeo-Extra-Bold'),
    url(${AppleSDGothicNeoHttf}) format('truetype')
  `
}

const theme = createTheme({
  typography: {
    fontFamily: [
      'AppleSDGothicNeo',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          AppleSDGothicNeoT, 
          AppleSDGothicNeoUL, 
          AppleSDGothicNeoL, 
          AppleSDGothicNeoR, 
          AppleSDGothicNeoM,
          AppleSDGothicNeoSB,
          AppleSDGothicNeoB, 
          AppleSDGothicNeoEB,
          AppleSDGothicNeoH
        ],
      },
    }
  },
  palette: {
    primary: {
      main: '#98a6a'
    },
    secondary: {
      main: '#272935',
      light: '#23252f'
    },
    background: {
      main: "#272935"
    }
  }
})


export default function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home}/>
          <Route path="*" component={Page404}/>
        </Switch>
      </AnimatePresence>
    </ThemeProvider>
  )
}