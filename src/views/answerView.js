import { quizData } from '../data.js';

/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');

  if (quizData.questions[quizData.currentQuestionIndex].correct === key) {
    element.id = 'correctAnswer';
  }

  if (quizData.questions[quizData.currentQuestionIndex].userAnswer === key) {
    element.id = 'userAnswer';
  }

  element.innerHTML = String.raw`
    ${key}: ${answerText}
  `;
  return element;
};
