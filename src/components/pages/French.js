import React from "react";
import Quiz from 'react-quiz-component';
import quiz from './Quiz';
import PageTitle from "../PageTitle";
import PageSubTitle from "../PageSubTitle";

function French() {
  return (
    <div>
      <PageTitle title="French"/>
      <PageSubTitle subtitle="French Quiz"/>
      <Quiz quiz={quiz}/>
      <p>
        Colours
      </p>
    </div>
  );
}

export default French;