import { ANSWERS_LIST_ID, } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { SKIP_QUESTION_BUTTON_ID } from '../constants.js';
import { SCORE_TEXT_ID } from '../constants.js';
import { IMAGES_ID } from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');
  element.classList.add('question-container');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
  <img id="${IMAGES_ID}" src=public/images/logo.jpg alt="logo" >
     <div class="header">
        <div>
            <p>Question No:</p>
            <span id="question-number">1</span>
        </div>
        <div>
            <p>Score:</p>
            <span id="${SCORE_TEXT_ID}" class:score>0</span>
        </div>
    </div>
    <h1 class="question-text">${question}</h1>
    <ul id="${ANSWERS_LIST_ID}" class="answers-list"></ul>
    <div class="buttons-container">
        <button id="${SKIP_QUESTION_BUTTON_ID}" class="skip-question-button">
          Skip question
        </button>
       <button id="${NEXT_QUESTION_BUTTON_ID}" class="next-question-button">
          Next question
       </button>
    </div>
  `;

  return element;
};
