import React, { useState, useEffect } from "react";
import frenchData from '../French.json'
import Quiz from 'react-quiz-component';
import quiz from './Spanishquiz.json';
import { FlashcardArray } from "react-quizlet-flashcard";


function Spanish() {
  return (
    <div>
      <h1>Spanish</h1>
      <h2>Spanish Quiz</h2>
      <Quiz quiz={quiz}/>
      <p>
        Colores
      </p>
        <FlashcardArray cards={frenchData} />
    </div>
  );
}

export default Spanish;