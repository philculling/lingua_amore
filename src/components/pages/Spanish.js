import React, { useState, useEffect } from "react";
import frenchData from '../French.json'
import Quiz from 'react-quiz-component';
import quiz from './Spanishquiz.json';
import { Flashcard, FlashcardArray } from "react-quizlet-flashcard";
import Rouge from '../../sounds/Rouge.mp3';
import Gris from '../../sounds/Gris.mp3';
import Jaune from '../../sounds/Jaune.mp3';
import Noir from '../../sounds/Noir.mp3';
import Orange from '../../sounds/Orange.mp3';
import Rose from '../../sounds/Rose.mp3';
import Vert from '../../sounds/Vert.mp3';

import correct from '../../sounds/correct.wav';

function Spanish() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextItem() {
    setCurrentIndex((currentIndex + 1) % frenchData.length);
  }
  const currentItem = frenchData[currentIndex];

  function play() {
    if (currentIndex === 0) {
    new Audio(Rouge).play()}
    else if (currentIndex === 1) {
      new Audio(Orange).play()
    }
    else if (currentIndex === 2) {
      new Audio(Jaune).play()
    }else if (currentIndex === 3) {
      new Audio(Vert).play()
    }else if (currentIndex === 4) {
      new Audio(correct).play()
    }else if (currentIndex === 5) {
      new Audio(correct).play()
    }else if (currentIndex === 6) {
      new Audio(Noir).play()
    }else if (currentIndex === 7) {
      new Audio(correct).play()
    }else if (currentIndex === 8) {
      new Audio(Rose).play()
    }else 
      new Audio(Gris).play()
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