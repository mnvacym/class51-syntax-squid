import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  SKIP_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SCORE_TEXT_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

let score = 0;

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  //Update Score Text
  const scoreElement = document.getElementById(SCORE_TEXT_ID);
  scoreElement.innerText = `${score}`;

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }
  answersListElement.addEventListener('click', selectAnswer);

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
};
const nextQuestion = () => {
  if (quizData.currentQuestionIndex + 1 < quizData.questions.length) {
    quizData.currentQuestionIndex++;

    initQuestionPage();
  } else {
    alert('No more qustions!');
  }
};

/*  
Highlights correct and/or wrong answer based on user interaction
Modifies quizData to indicate if the question is answered
*/
const selectAnswer = (e) => {
  const selectedAnswer = e.target;
  const correctAnswer = document.getElementById('correctAnswer');

  if (quizData.questions[quizData.currentQuestionIndex].selected === null) {
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

const skipQuestion = () => {
  quizData.currentQuestionIndex++;
  if (quizData.currentQuestionIndex >= quizData.questions.length) {
    alert('No more questions!');
    return;
  }
  initQuestionPage();
};
