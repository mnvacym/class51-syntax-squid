import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { createFinalView } from './views/finalView.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  initWelcomePage();
  createFinalView();
 
};

window.addEventListener('load', loadApp);
