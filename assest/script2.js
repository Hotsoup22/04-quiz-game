// var startGameBtn = $('#start') ;
// var restartBtn = $(".restart");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
// var questionsTitle = $('.questionsTitle');
var questionsTitle = document.getElementById("questionsTitle");
var startTitle = document.getElementById("#startTitle");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var answersBtn = document.querySelectorAll(".answersBtn");
var answersContainerDiv = $("#answersContainer");
let currentQuestionIndex = 0;


startButton.addEventListener("click", startGame);
// The startGame function is called when the start button is clicked
function startGame() {
  $(".hidden").css({ display: "block" });
  $("#buttonInitials").css({ display: "none" });
  // startTitle.css(display,"none");
  isWin = false;
  timerCount = 20;

  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  renderQuestions();
  startTimer();
}
// Updates the timer value to immediate value
function updateTimerValue() {
  timerElement.textContent = timerCount;
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timerInterval = setInterval(function () {
    timerCount -= 1;
    updateTimerValue();
    if (timerCount <= 0 || currentQuestionIndex === questions.length) {
      winGame();

      // Tests if time has run out
    }
  }, 1000);
}

// The winGame function is called when the win condition is met
function winGame() {
  startButton.disabled = false;
  setWins();
}

// The loseGame function is called when timer reaches 0
function incorrectAnswer() {
  document.getElementById("startTitle").innerHTML = "INCORRECT";
  timerCount -= 10;
  if ((timerCount -= 0)) {
    console.log(timerCount, " if (timer count -= 0)");
    gameOver();
  }

  startButton.disabled = false;
}
function correctAnswer() {
  document.getElementById("startTitle").innerHTML = "CORRECT!!!🏆 ";
  winCounter++;
}

function gameOver() {
  updateTimerValue();
  document.getElementById("startTitle").innerHTML = "GAME OVER";
  $("#inlineFormInput").css({ display: "block" });
  $(".initials").css({ display: "block" });
  //  startTitle.innerHTML = "GAME OVER";
  // startTitle.textContent = ("GAME OVER");
  currentQuestionIndex = 0;
  startButton.disabled = false;
  winCounter = 0;
  // setLosses();
}

function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

// Updates lose count on screen and sets lose count to client storage
// function setLosses() {
//   lose.textContent = loseCounter;
//   localStorage.setItem("loseCount", loseCounter);
// }

// These functions are used by init
function getWins() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("winCount");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
    winCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    winCounter = storedWins;
  }
  //Render win count to page
  win.textContent = winCounter;
}

// function getlosses() {
//   var storedLosses = localStorage.getItem("loseCount");
//   if (storedLosses === null) {
//     loseCounter = 0;
//   } else {
//     loseCounter = storedLosses;
//   }
//   lose.textContent = loseCounter;
// }

var restartBtn = document.querySelector(".reset-button");
// function resetGame() {
//   clearInterval(timer)
//  timerCount = 20;
//   questionsTitle.textContent ="ready?"
//   // Resets win and loss counts
//   winCounter = 0;
//   loseCounter = 0;

//   // Renders win and loss counts and sets them into client storage
//   setWins();
//   setLosses();
// }
// restartBtn.addEventListener("click", resetGame);
var questions = [
  {
    question: "What color is a apple?",
    answers: ["A: red", "B: oragne", "C: yellow", "D: pink"],
    //correct answers
    correctAnswer: "A: red",
  },
  {
    question: "what color is a lychee",
    answers: ["A: brown", "B: pink-red", "C: red-yellow", "D: purple"],
    //correct answers
    correctAnswer: "B: pink-red",
  },
];

// Creates blanks on screen

function renderQuestions() {
  questionsTitle.textContent = questions[currentQuestionIndex].question;
  // for (i = 0; i < questions[currentQuestion].answers.length; i++) {
  btn1.textContent = questions[currentQuestionIndex].answers[0];
  btn2.textContent = questions[currentQuestionIndex].answers[1];
  btn3.textContent = questions[currentQuestionIndex].answers[2];
  btn4.textContent = questions[currentQuestionIndex].answers[3];
}
let highscores = [];
for (var i = 0; i < answersBtn.length; i++) {
  answersBtn[i].addEventListener("click", function userAnswer(event) {
    event.stopPropagation();
    if (
      event.currentTarget.innerText ===
      questions[currentQuestionIndex].correctAnswer
    ) {
      currentQuestionIndex++;
      correctAnswer();
      // correctAnswer.textContent = "Correct + 5 sec";
      // correctAnswer.setAttribute("style", "color: yellow");
      // secondsLeft = secondsLeft + 5;
      console.log("correct");
    } else {
      incorrectAnswer();
      // timerCount =  - 5;
      // incorrectAnswer.textContent = "Incorrect - 5 sec";
      // incorrectAnswer.setAttribute("style", "color: red");
      // secondsLeft = secondsLeft - 5;
      console.log("Incorrect minus 5 seconds");
    }
    console.log(currentQuestionIndex + "current question ");

    if (currentQuestionIndex < 2) {
      renderQuestions();
    } else {
      setHighScore();
      gameOver();
      clearInterval(timer);
      currentQuestionIndex = 0;
      renderQuestions();
    }
  });
}
function setHighScore(finalWinScore, finalLoseScore, timerleft) {
  console.log("lopp");
  finalWinScore = win.textContent;
  finalLoseScore = lose.textContent;
  timerleft = timerCount;
  console.log(
    finalWinScore + ":correct",
    finalLoseScore + ":inncorrect",
    timerleft + " :seconds left"
  );
  //  highscores = (finalWinScore, finalLoseScore, timerleft);
  localStorage.setItem(
    "highscores",
    JSON.stringify(finalWinScore, finalLoseScore, timerleft)
  );
  return finalWinScore, finalLoseScore, timerleft;
}
// highscores.push(finalWinScore, finalLoseScore, timerleft);
//var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
submitButton = document.getElementById("buttonInitials");
submitButton.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("click");

  // Send to localStorage

  setHighScore();
});

console.log(questions[currentQuestionIndex].correctAnswer);


