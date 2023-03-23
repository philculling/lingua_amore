import React, { useState, useEffect } from "react";
import Flashcard from "../Flashcard";
import frenchData from '../French.json'


function Spanish() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextItem() {
    setCurrentIndex((currentIndex + 1) % frenchData.length);
  }


  const currentItem = frenchData[currentIndex];

  return (
    <div>
      <h1>Spanish</h1>
        <nav>
          <button onClick={handleNextItem}>Next</button>
          <button>Answer</button>
        </nav>
        {
            <Flashcard
              id={currentItem.id}
              key={currentItem.id}
              name={currentItem.french}
            />
        }
    </div>
  );
}

export default Spanish;