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

const hintMessages = [
  'Consider a country with many overseas territories spread across different oceans.',
  'He is known as the "Father of His Country" and served from 1789 to 1797',
  'Look for a Scandinavian country known for its thousands of islands.',
  "It makes up about 78% of Earth's atmosphere and is essential for life.",
  'The number of rings represents the unity of countries from different continents.',
  "It's a planned city, not the largest, and located between two major cities.",
  'This iconic singer is famous for hits like "Like a Virgin" and "Vogue."',
  'The war ended in the mid-20th century, just after the dropping of atomic bombs.',
  'The first Olympic Games were held in the birthplace of the ancient Olympics.',
  'This continent is home to over 50 countries, many in diverse regions.',
 ];
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
  answersListElement.querySelectorAll('li').forEach((e) => e.addEventListener('click', selectAnswer));

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

     // Add Hint Button Listener
  addHintButtonListener(); 
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
// Show hint for the current question
const showHint = () => {
  const hintButton = document.getElementById('hint-button');
  const hintText = hintMessages[quizData.currentQuestionIndex];
  
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
