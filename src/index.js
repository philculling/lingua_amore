import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            main: '#95818d',
          },
          secondary: {
            main: '#f44336',
          },
    },
        typography: {
          h1: {
            fontSize: "2rem",
            marginLeft: "10px"
          },
          body1: {
            fontWeight: 500,
          },
          button: {
            fontStyle: '',
          },
          h2: {
            fontSize: "1.5rem",
            paddingTop: "50px",
            marginLeft: "10px"

          },
          body1: {
            fontSize: "1rem",
            paddingTop: "40px",
            marginLeft: "10px"
        }
        },
      
  });
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}><App /></ThemeProvider>
    
);