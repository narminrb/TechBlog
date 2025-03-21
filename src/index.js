import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/style.scss";
import { BrowserRouter } from 'react-router-dom'
import "remixicon/fonts/remixicon.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <BrowserRouter>
       <App />
       </BrowserRouter>
  </React.StrictMode>
);

