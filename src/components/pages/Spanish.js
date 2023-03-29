import React, { useState } from "react";
import spanishData from '../Spanish.json'
import Quiz from 'react-quiz-component';
import quiz from './Spanishquiz.json';
import { Flashcard, FlashcardArray } from "react-quizlet-flashcard";
import Rojo from '../../sounds/Rojo.mp3';
import Gris from '../../sounds/Gris.mp3';
import Jaune from '../../sounds/Jaune.mp3';
import Noir from '../../sounds/Noir.mp3';
import Anaranjado from '../../sounds/Anaranjado.mp3';
import Rose from '../../sounds/Rose.mp3';
import Vert from '../../sounds/Vert.mp3';
import Bleu from '../../sounds/Bleu.mp3';
import Blanc from '../../sounds/Blanc.mp3';
import Brun from '../../sounds/Brun.mp3';
import PageTitle from "../PageTitle";
import PageSubTitle from "../PageSubTitle";
import { Box, Button, Container } from "@mui/material";

function Spanish() {

  const [showFlash, setShowFlash] = useState(true);
  const [currentCard, setCurrentCard] = useState(1);

  const handleFlashClick = () => {
    setShowFlash(true);
  };

  const handleQuizClick = () => {
    setShowFlash(false);
  };

  function play() {
    if (currentCard === 1) {
    new Audio(Rojo).play()}
    else if (currentCard === 2) {
      new Audio(Anaranjado).play()}
    else if (currentCard === 3) {
      new Audio(Jaune).play()
    }else if (currentCard === 4) {
      new Audio(Vert).play()
    }else if (currentCard === 5) {
      new Audio(Bleu).play()
    }else if (currentCard === 6) {
      new Audio(Blanc).play()
    }else if (currentCard === 7) {
      new Audio(Noir).play()
    }else if (currentCard === 8) {
      new Audio(Brun).play()
    }else if (currentCard === 9) {
      new Audio(Rose).play()
    }else 
      new Audio(Gris).play()
    }

    const handleCardChange = (index) => {
      setCurrentCard(index);
    };

  return (
    <div>
      <PageTitle title="Spanish"/>
      <PageSubTitle subtitle="Spanish Quiz"/>
      <PageSubTitle subtitle="Colores"/>
      <Container sx={{display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
        <Button color="secondary" variant="contained" size="large" onClick={play}>Play Spanish word</Button>
        <Box sx={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
          <Button color="secondary"   sx={{margin: "10px"}}onClick={handleQuizClick} variant="contained" size="large">Quiz</Button>
          <Button color="secondary" onClick={handleFlashClick} variant="contained" size="large">Flashcards</Button>
        </Box>
        
        {showFlash ? (
          <Box>
          <FlashcardArray 
            cards={spanishData}
            onCardChange={handleCardChange}
          />
          </Box>
        ) : (
          <Box>
            <h2>Spanish Quiz</h2>
            <Quiz quiz={quiz}/>
          </Box>
        )}
      </Container>
    </div>
  );
}

export default Spanish;