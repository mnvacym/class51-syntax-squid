import { 
  ANSWERS_LIST_ID, 
  NEXT_QUESTION_BUTTON_ID, 
  SCORE_TEXT_ID, 
  PREVIOUS_QUESTION_BUTTON_ID,  
  IMAGES_ID, 
  TIMER_ID,
  HINT_BUTTON_ID
} from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */

export const createQuestionElement = (question) => {
  const element = document.createElement('div');
  element.classList.add('question-container');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
  <div class="main-container">
 <img id="${IMAGES_ID}" src="./public/images/quiz.png">
  <div class="header"style="margin-bottom:6px;">
    <div>
      <p>Question No:</p>
      <span id="question-number">1</span>
    </div>
    <div class="timer-container">
      <span id="${TIMER_ID}">0</span>
    </div>
    <div>
      <p>Score:</p>
      <span id="${SCORE_TEXT_ID}" class=score>0</span>
    </div>
  </div>
  <div class="bax-container">
    <h1 class="question-text"  style="margin-top:15px;">${question}</h1>
    <ul id="${ANSWERS_LIST_ID}" class="answers-list"></ul>
    <div class="buttons-container">
      <button id="${PREVIOUS_QUESTION_BUTTON_ID}"  class="previous-question-button">
       <img src="public/images/prev-button.png" alt="Prev Icon" style="width: 50px; height: 50px;">
      </button>
      <button id="${HINT_BUTTON_ID}" class="hint-button">
        Hint
      </button>   
      <button id="${NEXT_QUESTION_BUTTON_ID}" class="next-question-button">
       <img src="public/images/next-button.png" alt="Next Icon" style="width: 50px; height: 50px;">
      </button>
    </div>
  </div>
  </div>
  `;

  return element;
};
