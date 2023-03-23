import React from "react";
import Quiz from 'react-quiz-component';
import quiz from './Quiz';

function French() {
  return (
    <div>
      <h1>French</h1>
      <h2>French Quiz</h2>
      <Quiz quiz={quiz}/>
      <p>
        Colours
      </p>
    </div>
  );
}

export default French;