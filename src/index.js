/*========================================
        Import Dependencies
========================================*/
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
/*========================================
        Import Css
========================================*/
import './index.css';

import App from './pages/App/App.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
