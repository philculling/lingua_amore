import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import French from './components/pages/French';
import Spanish from './components/pages/Spanish';
import Italian from './components/pages/Italian';

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
      primary: {
          main: '#264039',
        },
        secondary: {
          main: '#d487c1',
        },
  },
      typography: {
        h1: {
          fontSize: "4rem",
          marginLeft: "20px",
        },
        h2: {
          fontSize: "3rem",
          paddingTop: "50px",
          marginLeft: "20px"

        },
        body1: {
          fontSize: "1rem",
          paddingTop: "40px",
          marginLeft: "20px"
      }
      },
    
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavTabs />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="french" element={<French />} />
              <Route path="spanish" element={<Spanish />} />
              <Route path="italian" element={<Italian />} />
            </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
