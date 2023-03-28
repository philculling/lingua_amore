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

  const handleFlashClick = () => {
    setShowFlash(true);
  };

  const handleQuizClick = () => {
    setShowFlash(false);
  };

  return (

    <div>
    <PageTitle title="Italian"/>
      <PageSubTitle subtitle="Italian Quiz"/>
      <Quiz quiz={quiz}/>
      <p>
        Colores
      </p>
    

      <Container sx={{display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
        <h1>Italian</h1>
        <Box sx={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
          <Button color="secondary"   sx={{margin: "10px"}}onClick={handleQuizClick} variant="contained" size="large">Quiz</Button>
          <Button color="secondary" onClick={handleFlashClick} variant="contained" size="large">Flashcards</Button>
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
      </div>
  );
}

export default Italian;