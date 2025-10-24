import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Support either an element with id 'root' (convention) or 'app' (current index.html)
const container = document.getElementById('root') || document.getElementById('app');
if (!container) {
  throw new Error('Root container not found. Expected an element with id="root" or id="app" in index.html');
}
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);