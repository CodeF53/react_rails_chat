import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import ActionCable from "actioncable";

import App from './App';

import './styles/index.scss';
import './styles/layout.scss';
import './styles/forms.scss';
import './styles/room.scss';

const cableApp={}
cableApp.cable=ActionCable.createConsumer("/cable")

const root = ReactDOM.createRoot(document.body);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App cable={cableApp.cable} />
    </BrowserRouter>
  </React.StrictMode>
);
