import React, { useState } from "react";
import Quiz from 'react-quiz-component';
import quiz from './Italianquiz.json';
import PageTitle from "../PageTitle";
import { FlashcardArray } from "react-quizlet-flashcard";
import italianData from '../Italian.json'
import { Box, Button, Container } from "@mui/material";
import Arancione from '../../sounds/Italiansounds/Arancione.mp3';
import Rosso from '../../sounds/Italiansounds/Rosso.mp3';

function Italian() {

  const [showFlash, setShowFlash] = useState(true);
  const [data] = useState([...italianData]);
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

  const [currentCard, setCurrentCard] = useState(1);

  function play() {
    if (currentCard === 1) {
    new Audio(Rosso).play()}
    else if (currentCard === 2) {
      new Audio(Arancione).play()}
    }

    const handleCardChange = (index) => {
      setCurrentCard(index);

    };
  return (
    <Container sx={{padding: "20px", display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
      <PageTitle title="Italian"/>
        <Container sx={{display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
          <Box sx={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
            <Button color="secondary"  sx={{margin: "10px"}}onClick={handleQuizClick} variant="contained" size="large">Quiz</Button>
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
            <h2>Italian Quiz</h2>
            <Quiz quiz={quiz}/>
          </Box>
          )}
      </Container>
      </Container>
  );
}

export default Italian;