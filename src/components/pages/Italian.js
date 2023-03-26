import React from "react";
import Quiz from 'react-quiz-component';
import quiz from './Italianquiz.json';
import { FlashcardArray } from "react-quizlet-flashcard";
import frenchData from '../French.json'

function Italian() {

  return (
    <div>
      <h1>Italian</h1>
      <h2>Italian Quiz</h2>
      <Quiz quiz={quiz}/>
      <p>
        Colores
      </p>
      <FlashcardArray cards={frenchData} />
    </div>
  );
}

export default Italian;