import React, { useState } from "react";
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
import Bleu from '../../sounds/Bleu.mp3';
import Blanc from '../../sounds/Blanc.mp3';
import Brun from '../../sounds/Brun.mp3';

import PageTitle from "../PageTitle";
import PageSubTitle from "../PageSubTitle";

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
      new Audio(Orange).play()}
    else if (currentIndex === 2) {
      new Audio(Jaune).play()
    }else if (currentIndex === 3) {
      new Audio(Vert).play()
    }else if (currentIndex === 4) {
      new Audio(Bleu).play()
    }else if (currentIndex === 5) {
      new Audio(Blanc).play()
    }else if (currentIndex === 6) {
      new Audio(Noir).play()
    }else if (currentIndex === 7) {
      new Audio(Brun).play()
    }else if (currentIndex === 8) {
      new Audio(Rose).play()
    }else 
      new Audio(Gris).play()
    }

  return (
    <div>
      <PageTitle title="Spanish"/>
      <PageSubTitle subtitle="Spanish Quiz"/>
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
              picture={currentItem.picture}
            />
        }
        <button onClick={play}>Play Spanish word</button>
    </div>
  );
}

export default Spanish;