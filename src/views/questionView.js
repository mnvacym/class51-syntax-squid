import { ANSWERS_LIST_ID, } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { SKIP_QUESTION_BUTTON_ID } from '../constants.js';
import { SCORE_TEXT_ID } from '../constants.js';
import { PREVIOUS_QUESTION_BUTTON_ID } from '../constants.js';
import { PROGRESS_BAR_ID } from '../constants.js';
import { IMAGES_ID } from '../constants.js';
import { TIMER_ID } from '../constants.js';
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
     <div class="header"style="margin-bottom:6px;" >
        <div>
            <p>Question No:</p>
            <span id="question-number">1</span>
        </div>
        <div>
            <p>Time:</p>
            <span id="${TIMER_ID}">60</span>
        </div>
        <div>
            <p>Score:</p>
            <span id="${SCORE_TEXT_ID}" class:score>0</span>
        </div>
    </div>
    <div id="progress-container" style="width: 100%; background-color: #ddd; height: 15px; border-radius: 10px; margin-top:25px; margin-bottom:2px;">
      <div id="${PROGRESS_BAR_ID}" class="progress-bar" style="width: 0%; background-color:green; height: 100%; border-radius:: 10px;"></div>
      </div>
     <div class="bax-container" style="margin-bottom: 49px;">
    <h1 class="question-text"  style="margin-top:15px;">${question}</h1>
    <ul id="${ANSWERS_LIST_ID}" class="answers-list"></ul>
    <div class="buttons-container">
        <button id="${PREVIOUS_QUESTION_BUTTON_ID}"  class="previous-question-button">
         &#x23EA;
       </button>
        <button id="${SKIP_QUESTION_BUTTON_ID}" class="skip-question-button">
          Skip question
        </button>
               <button id="hint-button" class="hint-button">
          Hint
       </button>   
       <button id="${NEXT_QUESTION_BUTTON_ID}" class="next-question-button">
          &#x23E9;
       </button>

    </div>
    </div>
  `;

  return element;
};
