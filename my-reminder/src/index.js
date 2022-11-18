import React from 'react';
import ReactDOM from 'react-dom/client';
import All from './All';
import "./index.css";
import Todos from "./Todos";
import Register from "./Registe";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Register />
  </React.Fragment>
);
