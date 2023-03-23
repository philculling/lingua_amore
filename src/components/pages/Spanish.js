import React from "react";
import Quiz from 'react-quiz-component';
import quiz from './Spanishquiz.json';

function Spanish() {
  return (
    <div>
      <h1>Spanish</h1>
      <h2>Spanish Quiz</h2>
      <Quiz quiz={quiz}/>
      <p>
        Colores
      </p>
    </div>
  );
}

export default Spanish;