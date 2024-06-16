import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactGA from 'react-ga';

const tracking_id = 'G-2KZEXK355Y';
ReactGA.initialize(tracking_id);

ReactGA.pageview(window.location.pathname);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
