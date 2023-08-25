import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import { App } from 'components/App';
import { GlobalStyle } from './components/styles/GlobalStyle.jsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/styles/theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
