import React from "react";
import Quiz from 'react-quiz-component';
import quiz from './Italianquiz.json';
import PageTitle from "../PageTitle";
import PageSubTitle from "../PageSubTitle";

function Italian() {
  return (
    <div>
    <PageTitle title="Italian"/>
      <PageSubTitle subtitle="Italian Quiz"/>
      <Quiz quiz={quiz}/>
      <p>
        Colores
      </p>
    </div>
  );
}

export default Italian;