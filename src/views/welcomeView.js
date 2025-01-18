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
  <div>
    <h1 style=color:white>Quiz your way to the top</h1>
    <img id="${IMAGES_ID}" src=public/images/quiz.png>
  </div> 
  <input type="text" id="${USERNAME_ID}" placeholder="write your name ">
  <button id="${START_QUIZ_BUTTON_ID}">Start Quiz</button>
  `;

  return element;
};
