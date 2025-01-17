import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  SKIP_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SCORE_TEXT_ID,
  PREVIOUS_QUESTION_BUTTON_ID,
  PROGRESS_BAR_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { createFinalView } from '../views/finalView.js';

let score = 0;

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const displayQuestion = () => {
    const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';
  }

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);


  //previous question button
  if (currentQuestion.selected){
    const selectedAnswer = document.getElementById(currentQuestion.selected);
    if (selectedAnswer === true) {
     if (currentQuestion.selected === 'currentAnswer'){
    
        selectedAnswer.style.backgroundColor = 'green';
      }else {
      selectedAnswer.style.backgroundColor ='red';
     }
     selectedAnswer.style.pointerEvents = 'none';
  }}


  //Update Score Text
  const scoreElement = document.getElementById(SCORE_TEXT_ID);
  scoreElement.innerText = `${score}`;

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }
  answersListElement.addEventListener('click' , selectAnswer);
  //Update Question Number
  document.getElementById('question-number').innerText = `${
    quizData.currentQuestionIndex + 1
  }`;

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  document
    .getElementById(SKIP_QUESTION_BUTTON_ID)
    .addEventListener('click', skipQuestion);

  document
   .getElementById(PREVIOUS_QUESTION_BUTTON_ID)
   .addEventListener('click', previousQuestion);
};
const nextQuestion = () => {
  if (quizData.currentQuestionIndex + 1 < quizData.questions.length) {
    quizData.currentQuestionIndex++;

    initQuestionPage();
  }else {
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';
    userInterface.appendChild(createFinalView(score, quizData.questions.length));
  }
};
const skipQuestion = () => {
  quizData.currentQuestionIndex++;
  if (quizData.currentQuestionIndex >= quizData.questions.length) {
    alert('No more questions!');
    return;
  }
  initQuestionPage();
};
// Previous function
const previousQuestion = () => {
  if (quizData.currentQuestionIndex > 0) {
     quizData.currentQuestionIndex--;
   initQuestionPage();
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

     if (currentQuestion.selected) {
       const selectedAnswer = document.getElementById(currentQuestion.selected);

        if(selectedAnswer) {  
         selectedAnswer.style.backgroundColor =
         currentQuestion.selected === currentQuestion.correctAnswer ? 'green' : 'red';

       document.getElementById(ANSWERS_LIST_ID).style.pointerEvents = 'none';
     }
    }
  } else {
    alert('No more previous questions!');
  }
};
/*  
Highlights correct and/or wrong answer based on user interaction
Modifies quizData to indicate if the question is answered
*/
const selectAnswer = (e) => {
const selectedAnswer = e.target;
const correctAnswer = document.getElementById('correctAnswer');
if (quizData.questions[quizData.currentQuestionIndex].selected === null){
  quizData.questions[quizData.currentQuestionIndex].selected = true;

  if (selectedAnswer.id === 'correctAnswer') {
    selectedAnswer.style.backgroundColor = 'green';
    score++;
    document.getElementById(SCORE_TEXT_ID).innerText = `${score}`;
  } else {
    selectedAnswer.style.backgroundColor = 'red';
    correctAnswer.style.backgroundColor = 'green';
  }
 }
};






