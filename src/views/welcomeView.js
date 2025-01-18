import { 
  IMAGES_ID, 
  START_QUIZ_BUTTON_ID, 
  USERNAME_ID 
} from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw` 
  <img src="./public/images/quiz.png"  class="logo">  
  <div>
    <h1 class="title">Syntax Squid Challenge
  </div> 
    <div class="input-container">
  <input type="text" id="${USERNAME_ID}" class="username-input" placeholder="Enter your name ">
  <button id="${START_QUIZ_BUTTON_ID}" class="start-button">Start Quiz</button>
  </div>
  `;

  return element;
};
