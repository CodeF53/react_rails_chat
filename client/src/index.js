import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import ActionCable from "actioncable";

import App from './App';

import './styles/index.scss';
import './styles/layout.scss';
import './styles/login_signup.scss';

const cableApp={}
cableApp.cable=ActionCable.createConsumer("/cable")
console.log(cableApp)

const root = ReactDOM.createRoot(document.body);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App cable={cableApp} />
    </BrowserRouter>
  </React.StrictMode>
);
