
export const createFinalView = (score, totalQuestions) => {
    const finalPage = document.createElement('div');
     finalPage.classList.add('final-page-container');

     const scorePercentage = (score / totalQuestions) * 100;
     let message;
      if (score > 7){
        message = "Congratulations!";
      }else if (score >= 5){
        message = "Good Try!";
      }else {
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

finalPage.querySelector('#play-again-button').addEventListener('click', () =>
    { window.location.reload();
        });

        return finalPage;
       };