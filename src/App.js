import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from '@mui/material';
import Flashcard from './components/Flashcard';

function App() {
  return (
    <Container>
        <Flashcard />
    </Container>
  );
}

export default App;
