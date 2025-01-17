import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';
import { USERNAME_ID } from '../constants.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  const userName = welcomeElement.querySelector(`#${USERNAME_ID}`);


  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', () => {
      const name = userName.value.trim();
      if (name==='') {
        alert('Please enter your name!');
        return;
      };
      startQuiz(name);

    });
    userName.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        const name = userName.value.trim();
        if (name==='') {
          alert('Please enter your name!');
          return;
        };
        startQuiz(name);
      }
    });
};

const startQuiz = () => {
  
  initQuestionPage();
};
