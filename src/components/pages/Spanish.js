import React, { useState } from "react";
import frenchData from '../French.json'
import Quiz from 'react-quiz-component';
import quiz from './Spanishquiz.json';
import PageTitle from "../PageTitle";
import PageSubTitle from "../PageSubTitle";
import { FlashcardArray } from "react-quizlet-flashcard";
import Flashcard from '../Flashcard';

function Spanish() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextItem() {
    setCurrentIndex((currentIndex + 1) % frenchData.length);
  }
  const currentItem = frenchData[currentIndex];

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
              frenchwav={currentItem.frenchwav}
              picture={currentItem.picture}
            />
        }
    </div>
  );
}

export default Spanish;