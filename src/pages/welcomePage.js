import { 
  USER_INTERFACE_ID, 
  START_QUIZ_BUTTON_ID, 
  USERNAME_ID 
} from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export let userName = ''

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  const userNameElement = welcomeElement.querySelector(`#${USERNAME_ID}`);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', () => {
      userName = userNameElement.value.trim();
      if (userName==='') {
        alert('Please enter your name!');
        return;
      };
      startQuiz();

    });
    userNameElement.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        userName = userNameElement.value.trim();
        if (userName==='') {
          alert('Please enter your name!');
          return;
        };
        startQuiz();
      }
    });
};

const startQuiz = () => {
  initQuestionPage();
};
