import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import { Routes } from './Routes/Routes';

const App:React.FC = () => {

  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  );
};

export { App };


