import React, { useState, useEffect } from "react";
import Flashcard from "../Flashcard";
import frenchData from '../French.json'
import Quiz from 'react-quiz-component';
import quiz from './Spanishquiz.json';

function Spanish() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextItem() {
    setCurrentIndex((currentIndex + 1) % frenchData.length);
  }
  const currentItem = frenchData[currentIndex];

  return (
    <div>
      <h1>Spanish</h1>
      <h2>Spanish Quiz</h2>
      <Quiz quiz={quiz}/>
      <p>
        Colores
      </p>
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