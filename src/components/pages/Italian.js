import React, { useState } from "react";
import Quiz from 'react-quiz-component';
import quiz from './Italianquiz.json';

import PageTitle from "../PageTitle";
import PageSubTitle from "../PageSubTitle";

import { FlashcardArray } from "react-quizlet-flashcard";
import frenchData from '../French.json'
import { Box, Button, Container } from "@mui/material";



function Italian() {

  const [showFlash, setShowFlash] = useState(true);
  const [data] = useState([...frenchData]);
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

  return (
    <Container>
      <PageTitle title="Italian"/>
        <PageSubTitle subtitle="Italian Quiz"/>
        <Container sx={{display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
          <h1>Italian</h1>
          <Box sx={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
            <Button color="secondary"   sx={{margin: "10px"}}onClick={handleQuizClick} variant="contained" size="large">Quiz</Button>
            <Button color="secondary" onClick={handleFlashClick} variant="contained" size="large">Flashcards</Button>
          </Box>
        <Box>
          <Button onClick={() => handleCategoryClick('All')}>All</Button>
          <Button onClick={() => handleCategoryClick('colours')}>Colours</Button>
          <Button onClick={() => handleCategoryClick('nature')}>Nature</Button>
          <Button onClick={() => handleCategoryClick('household_items')}>Household Items</Button>
        </Box>
        {showFlash ? (
          <Box>
          <FlashcardArray cards={filteredData} />
          </Box>
        ) : (
          <Box>
            <h2>Italian Quiz</h2>
            <Quiz quiz={quiz}/>
          </Box>
          {showFlash ? (
            <Box>
            <FlashcardArray cards={frenchData} />
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