import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/users.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/addUsers.css'
import './css/updateModal.css'
import './css/searchUser.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);