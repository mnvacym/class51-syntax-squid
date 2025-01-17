import { IMAGES_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { USERNAME_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`    
   <div>
      <h1>Welcome</h1>

      <img id="${IMAGES_ID}" src=public/images/logo.jpg>

    </div>
    
    <input type="text" id="${USERNAME_ID}" placeholder="write your name ">
  
    <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  `;
  return element;
};
