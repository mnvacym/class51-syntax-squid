import { userName } from '../pages/welcomePage.js'
export const totalQuestions = 10;
export const score = 0;
export const createFinalView = (score, totalQuestions, totalTime) => {
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const finalPage = document.createElement('div');
  finalPage.classList.add('final-page-container');

  let message;
  if (score > 7) {
    message = ["Congratulations", "🥳"];
  } else if (score >= 4) {
    message = ["Good try", "🙃"];
  } else {
    message = ["Better luck next time", "😞"];
  }
  finalPage.innerHTML = `
  <div class="final-header">
    <h1>Result</h1>
  </div>
  <div class="final-content"> 
    <p>🌟 Score: ${score}/${totalQuestions} 🌟<br>
    ⏰ Quiz completed in: ${timeString} ⏰<br>
    ${message[0]},<span class="highlighted-user"> ${userName} </span> ${message[1]}</p>  
  </div>
  <div class="high-score-container">
    <h1>High Scores</h1>
    <table>
      <thead>
        <tr>
          <th>User Name</th>
          <th>Score</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        <!-- Previous scores will be inserted from localStorage here -->
      </tbody>
    </table>
  </div>
  <button id="play-again-button">Play Again</button> 
  `;


  const highScoreList = setHighScores(userName, score, timeString);
  highScoreList.forEach((highScore) => {
    const tableBody = finalPage.querySelector('tbody');
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
    <td>${highScore.userName}</td>
    <td>${highScore.score}</td>
    <td>${highScore.duration}</td>
    `;

    tableBody.appendChild(tableRow);
  });

  finalPage.querySelector('#play-again-button').addEventListener('click', () => {
    window.location.reload();
  });

  return finalPage;
};

// 
const setHighScores = (userName, score, timeString) => {
  let highScoreList = JSON.parse(localStorage.getItem('highScores'));
  const latestHighScore = {userName: userName, score: score, duration: timeString};

  if (highScoreList !== null) {
    if (highScoreList.length > 7) {
      highScoreList.shift();
      highScoreList.push(latestHighScore);
      localStorage.setItem('highScores', JSON.stringify(highScoreList));
    } else {
      highScoreList.push(latestHighScore);
      localStorage.setItem('highScores', JSON.stringify(highScoreList));
    }
  } else {
    highScoreList = [latestHighScore];
    localStorage.setItem('highScores', JSON.stringify(highScoreList));
  }
  
  highScoreList.sort((result1, result2) => (result2.score - result1.score));

  return highScoreList;
}