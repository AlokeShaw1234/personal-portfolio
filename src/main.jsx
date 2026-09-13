import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
//  importing global CSS files (like index.css) at the root level (main.jsx)
// so that universal resets (* { margin: 0; box-sizing: border-box; }) apply to the entire application.
import './index.css';

//  createRoot creates a root container for displaying React components inside the HTML root div.
// StrictMode is a developer tool that runs checks and highlights potential problems (e.g., side-effects) in development mode.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
