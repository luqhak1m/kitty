import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './js/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <h1>Paws & Preferences</h1>
      <p><i>Find Your Favourite Kitty!</i></p>
    </div>
    <App />
  </React.StrictMode>
);
