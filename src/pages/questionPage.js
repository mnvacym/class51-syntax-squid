import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SCORE_TEXT_ID,
  PREVIOUS_QUESTION_BUTTON_ID,
  TIMER_ID,
  HINT_TEXT_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { createFinalView } from '../views/finalView.js';

let score = 0;
let timer;
let timeElapsed = 0;
let timerStarted = false;

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  //Update Score Text
  const scoreElement = document.getElementById(SCORE_TEXT_ID);
  scoreElement.innerText = `${score}/10`;

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }
  answersListElement
    .querySelectorAll('li')
    .forEach((e) => e.addEventListener('click', selectAnswer));

  //Update Question Number
  document.getElementById('question-number').innerText = `${quizData.currentQuestionIndex + 1
    }`;

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  document
    .getElementById(PREVIOUS_QUESTION_BUTTON_ID)
    .addEventListener('click', previousQuestion);

  // Add Hint Button Listener
  addHintButtonListener();

  // Start timer one times
  if (!timerStarted) {
    startTimer();
    timerStarted = true;
  }

  updateTimerDisplay();  

  // Color previous answers if the user already answered the question
  if (currentQuestion.selected) {
    if (currentQuestion.correct === currentQuestion.userAnswer) {
      document.getElementById('userAnswer').style.backgroundColor = 'green';
    } else {
      document.getElementById('correctAnswer').style.backgroundColor = 'green';
      document.getElementById('userAnswer').style.backgroundColor = 'red';
    }
  }
};

const nextQuestion = () => {
  if (quizData.currentQuestionIndex + 1 < quizData.questions.length) {
    quizData.currentQuestionIndex++;
    initQuestionPage();
  } else {
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';
    clearInterval(timer);
    userInterface.appendChild(
      createFinalView(score, quizData.questions.length, timeElapsed)
    );
  }
};

// Previous function
const previousQuestion = () => {
  if (quizData.currentQuestionIndex > 0) {
    quizData.currentQuestionIndex--;
    initQuestionPage();
  }
};
/*  
Highlights correct and/or wrong answer based on user interaction
Modifies quizData to indicate if the question is answered
*/
const selectAnswer = (e) => {
  const selectedAnswer = e.target;
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const correctAnswer = document.getElementById('correctAnswer');
  
  if (quizData.questions[quizData.currentQuestionIndex].selected === null){
    quizData.questions[quizData.currentQuestionIndex].selected = true;
    quizData.questions[quizData.currentQuestionIndex].userAnswer = e.target.innerText[0];

    if (currentQuestion.correct === selectedAnswer.innerText[0]) {
      correctAnswer.style.backgroundColor = 'green';
      score++;
      document.getElementById(SCORE_TEXT_ID).innerText = `${score}/10`;
    } else {
      selectedAnswer.style.backgroundColor = '#f527277d';
      correctAnswer.style.backgroundColor = '#00ff0080';
    }
  }   
};

// Show hint for the current question
const showHint = () => {
  const hintText = quizData.questions[quizData.currentQuestionIndex].hintMessage;

  // Check if a hint is already displayed
  const existingHint = document.querySelector('.hint-text');
  if (existingHint) return;

  // Create and display the hint element
  const hintElement = document.createElement('p');
  hintElement.textContent = `Hint: ${hintText}`;
  hintElement.classList.add('hint-text');

  const questionContainer = document.querySelector('.question-container');
  questionContainer.appendChild(hintElement);
};

// Add event listener for the hint button
const addHintButtonListener = () => {
  const hintButton = document.getElementById('hint-button');
  hintButton.addEventListener('click', showHint);
};

// Timer
const updateTimerDisplay = () => {
  const timerDisplay = document.getElementById(TIMER_ID);
  const minutes = Math.floor(timeElapsed / 60);
  const seconds = timeElapsed % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const startTimer = () => {
  timer = setInterval(() => {
    timeElapsed++;
    // Timer'ı ekranda güncelle
    const timerElement = document.getElementById(TIMER_ID);
    if (timerElement) {
      const minutes = Math.floor(timeElapsed / 60);
      const seconds = timeElapsed % 60;
      timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  }, 1000);
};
