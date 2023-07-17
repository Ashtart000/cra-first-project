import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import Greeting from './components/Greeting/greeting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <App />
  <Greeting name="Alex"/>
  <Greeting name="Anna"/>
  <Greeting name="Masha"/>
  </>
);


