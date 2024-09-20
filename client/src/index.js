import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/auth';
import "antd/dist/reset.css";
import { SearchProvider } from './context/search';
import { CartProvider } from './context/cart';
import { ThemeProvider } from './context/themeContext';
// import '@fortawesome/fontawesome-free/css/all.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <AuthProvider>
      <SearchProvider>
        <BrowserRouter>
          <CartProvider>
            <App />
          </CartProvider>
        </BrowserRouter>
      </SearchProvider>
    </AuthProvider>
  </ThemeProvider>

);


