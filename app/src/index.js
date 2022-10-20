import React from 'react';
import '~/styles/index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { hydrate, render } from 'react-dom';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import dotenv from 'dotenv';
dotenv.config();

const rootElement = document.getElementById("root");

if (!!rootElement && rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <Router>
        <App/>
      </Router>
    </React.StrictMode>,
    rootElement
  );
} else {
  render(
    <React.StrictMode>
      <Router>
        <App/>
      </Router>
    </React.StrictMode>,
    rootElement
  );
}

if (process.env.NODE_ENV === 'development') {
  reportWebVitals(console.log);
}
