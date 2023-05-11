var highscoresUl = document.querySelector('.highscoresList');
var clear = document.querySelector(".clear")

let highscores = JSON.parse(localStorage.getItem('highscores')) || []

console.log("GET LOCAL STORAGE line 161", highscores)

function showHighScore() {
  highscoresUl.innerHTML = highscores.map((highscores) => {
    return `<div class="highscoreLiDiv"> <li class="highscoreLi"> Name: ${highscores.userInitials}</li> <li class="highscoreLi"> Score: ${highscores.score} </li>  <li class="highscoreLi"> Time Remaining: ${highscores.timeLeft} </li> </div>`
  }).join(' ')
}

clear.addEventListener("click", function () {
  localStorage.clear();
})
showHighScore();
