export const createFinalView = (score, totalQuestions, totalTime) => {
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const finalPage = document.createElement('div');
  finalPage.classList.add('final-page-container');

  const scorePercentage = (score / totalQuestions) * 100;
  console.log(`Quiz completed in: ${timeString}`);
  let message;
  if (score > 7) {
    message = "Congratulations!";
  } else if (score >= 5) {
    message = "Good Try!";
  } else {
    message = "Better Luck Next Time!";
  }
  finalPage.innerHTML = `
       <div class="final-header">
         <h1>Result</h1>
       </div>
       <div class="final-content"> 
          <p>Score: ${score}/${totalQuestions}</p> 
          <p class="result-message">${message}</p>
          <button id="play-again-button">Play Again</button>
       </div> 
            `;

  finalPage.querySelector('#play-again-button').addEventListener('click', () => {
    window.location.reload();
  });

  return finalPage;
};