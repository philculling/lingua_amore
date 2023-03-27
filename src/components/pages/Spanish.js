import React, { useState, useEffect } from "react";
import frenchData from '../French.json'
import Quiz from 'react-quiz-component';
import quiz from './Spanishquiz.json';
import { Flashcard, FlashcardArray } from "react-quizlet-flashcard";
import azul from '../../sounds/azul.mp3';
import correct from '../../sounds/correct.wav';

function Spanish() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextItem() {
    setCurrentIndex((currentIndex + 1) % frenchData.length);
  }
  const currentItem = frenchData[currentIndex];

  function play() {
    if (currentIndex === 0) {
    new Audio(azul).play()}
    else if (currentIndex === 1) {
      new Audio(correct).play()
    }
  }

  return (
    <div>
      <h1>Spanish</h1>
      <h2>Spanish Quiz</h2>
      <Quiz quiz={quiz}/>
      <p>
        Colores
      </p>
        <FlashcardArray cards={frenchData} />
        <nav>
          <button onClick={handleNextItem}>Next</button>
          <button>Answer</button>
        </nav>
        {
            <Flashcard
              id={currentItem.id}
              key={currentItem.id}
              name={currentItem.french}
              frenchwav={currentItem.frenchwav}
              picture={currentItem.picture}
            />
        }
        <button onClick={play}>Play Spanish word</button>
    </div>
  );
}

export default Spanish;