import React, { useState } from "react";
import spanishData from '../Spanish.json'
import Quiz from 'react-quiz-component';
import quiz from './Spanishquiz.json';
import { FlashcardArray } from "react-quizlet-flashcard";
import Rojo from '../../sounds/Spanishsounds/Rojo.mp3';
import Gris from '../../sounds/Frenchsounds/Gris.mp3';
import Jaune from '../../sounds/Frenchsounds/Jaune.mp3';
import Noir from '../../sounds/Frenchsounds/Noir.mp3';
import Anaranjado from '../../sounds/Spanishsounds/Anaranjado.mp3';
import Rose from '../../sounds/Frenchsounds/Rose.mp3';
import Vert from '../../sounds/Frenchsounds/Vert.mp3';
import Bleu from '../../sounds/Frenchsounds/Bleu.mp3';
import Blanc from '../../sounds/Frenchsounds/Blanc.mp3';
import Brun from '../../sounds/Frenchsounds/Brun.mp3';
import PageTitle from "../PageTitle";
import PageSubTitle from "../PageSubTitle";
import { Box, Button, Container } from "@mui/material";

function Spanish() {

  const [showFlash, setShowFlash] = useState(true);
  const [currentCard, setCurrentCard] = useState(1);
  const [data] = useState([...spanishData]);
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filteredData = data.filter(item => {
    if (categoryFilter === 'All') {
      return true;
    } else {
      return item.category === categoryFilter;
    }
  });

  const handleFlashClick = () => {
    setShowFlash(true);
  };

  const handleQuizClick = () => {
    setShowFlash(false);
  };

  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
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
        <Box sx={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
          <Button color="secondary"   sx={{margin: "10px"}}onClick={handleQuizClick} variant="contained" size="large">Quiz</Button>
          <Button color="secondary" onClick={handleFlashClick} variant="contained" size="large">Flashcards</Button>
        </Box>
        
        {showFlash ? (
          <Box>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Button onClick={() => handleCategoryClick('All')}>All</Button>
              <Button onClick={() => handleCategoryClick('colours')}>Colours</Button>
              <Button onClick={() => handleCategoryClick('nature')}>Nature</Button>
              <Button onClick={() => handleCategoryClick('household_items')}>Household Items</Button>
            </Box>
            <Box>
              <FlashcardArray 
                cards={filteredData} 
                onCardChange={handleCardChange}/>
            </Box>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Button variant="contained" color="secondary" onClick={play}>Play Sound</Button>
            </Box>
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