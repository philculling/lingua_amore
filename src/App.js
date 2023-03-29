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
          fontSize: "2rem",
          marginLeft: "10px"
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
          fontWeight: 500,
          fontSize: "1rem",
          paddingTop: "40px",
          marginLeft: "10px"
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
