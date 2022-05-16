import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AccountProvider from './Context/accountContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AccountProvider>
    <App />
    </AccountProvider>
  </React.StrictMode>
);


