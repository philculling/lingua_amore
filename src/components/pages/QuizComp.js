import Quiz from 'react-quiz-component';

function QuizComp() {
    return (
      <div>
        <h1>French Quiz</h1>
        <QuizComp quiz={Quiz} shuffle={true} showDefaultResult={false} showInstantFeedback={true} continueTillCorrect={true}/>
        <p>
        </p>
      </div>
    );
  }
  
  export default QuizComp;