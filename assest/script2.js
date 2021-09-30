// var startGameBtn = $('#start') ;
// var restartBtn = $(".restart");
var win = document.querySelector(".correctA");
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
let winCounter ;

startButton.addEventListener("click", startGame);

// The startGame function is called when the start button is clicked
function startGame() {
  $(".hidden").css({ display: "block" });
  $("#buttonInitials").css({ display: "none" });
  $("#startTitle").css({ display: "none" });
  isWin = false;
  timerCount = 30;
  startButton.disabled = true;
  winCounter=0;
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
      gameOver();

 
    }
  }, 1000);
}

// The winGame function is called when the win condition is met
function winGame() {
  startButton.disabled = false;
  getWins();
}

function hideIncorrect(){
  $(".incorrect").css({ display: "none" })
}

// The loseGame function is called when timer reaches 0
function incorrectAnswer() {
  document.getElementById("startTitle").innerHTML = "INCORRECT";
  timerCount -= 5;
  $(".incorrect").css({ display: "block" })
  setInterval(hideIncorrect, 2000)
}

 
function correctAnswer() {
  // document.getElementById("startTitle").innerHTML = "CORRECT!!!🏆 ";
  winCounter++;
  win.textContent = winCounter;
  console.log("wincounter should ++")
}

function gameOver() {
  clearInterval( timerInterval );
	if( timerCount < 0 ) {
		timerCount = 0;
	}
  updateTimerValue();
  document.getElementById("startTitle").innerHTML = "GAME OVER";
  $("#inlineFormInput").css({ display: "block" });
  $(".initials").css({ display: "block" });
  //  startTitle.innerHTML = "GAME OVER";
  // startTitle.textContent = ("GAME OVER");
  startButton.disabled = false;
  win.textContent=winCounter;
  // setLosses();
}





// These functions are used by init
function getWins() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("winCount");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
   
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    winCounter = storedWins;
  }
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
      correctAnswer();
      currentQuestionIndex++;
      
      console.log("correct");
    } else {
      incorrectAnswer();
      console.log("Incorrect minus 5 seconds");
    }
    console.log(currentQuestionIndex + " is the current question ");

    if (currentQuestionIndex < 2) {
      renderQuestions();
    } else {
      // setHighScore();
      gameOver();
      currentQuestionIndex = 0;
      renderQuestions();
    }
  });
}


// function setHighScore(finalWinScore, finalLoseScore, timerleft) {
//   console.log("lopp");
//   finalWinScore = win.textContent;
//   finalLoseScore = lose.textContent;
//   timerleft = timerCount;
//   console.log(
//     finalWinScore + ":correct",
//     finalLoseScore + ":inncorrect",
//     timerleft + " :seconds left"
//   );
//   //  highscores = (finalWinScore, finalLoseScore, timerleft);
//   localStorage.setItem(
//     "highscores",
//     JSON.stringify(finalWinScore, finalLoseScore, timerleft)
//   );
//   return finalWinScore, finalLoseScore, timerleft;
// }
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


