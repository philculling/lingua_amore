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
import { Container } from '@mui/material';
import Flashcard from './components/Flashcard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#264039',
    },
    secondary: {
      main: '#d487c1',
      // dark: will be calculated from palette.secondary.main,
    },
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
