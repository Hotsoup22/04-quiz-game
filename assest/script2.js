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
let timerCount;
startButton.addEventListener("click", startGame);
//
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


function hideIncorrect(){
  $(".incorrect").css({ display: "none" })
}

// The loseGame function is called when timer reaches 0
function incorrectAnswer() {
  // document.getElementById("startTitle").innerHTML = "INCORRECT";
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

	// if( timerCount < 0 ) {
	// 	timerCount = 0;

  document.getElementById("startTitle").innerHTML = `GAME OVER, refresh page to restart game!
  score: ${winCounter} time:${timerCount}`;
  $("#gameOver").css({display: 'block'})

  $("#inlineFormInput").css({ display: "block" });
  $(".initials").css({ display: "block" });
  $("#startTitle").css({ display: "block" });
 
  $("#startTitle").textContent = ("GAME OVER");
  startButton.disabled = false;
  btn1.disabled = true;
  btn2.disabled = true;
  btn3.disabled = true;
  btn4.disabled = true;
  win.textContent=winCounter;
  updateTimerValue();
    
  clearInterval( timerInterval );
  
  console.log("here")
  // setLosses();
  //}
}

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


// var initials = document.querySelector("#initials").value;
// function setHighScore( winCounter, timerCount,initials ) {
//  winCounter,
//  timerCount
//  initials
//   // var Highscores = {
// 	// 	name: initials,
// 	// 	answerScore: winCounter,
// 	// 	timeScore: timerCount
// 	// };
//   console.log('setHighScore',  winCounter,timerCount,initials)
//   // var storedHighscores = JSON.parse( localStorage.getItem( 'storedHighscores' ) ) || [];

// 	// storedHighscores.push( storedHighscores );

// 	// localStorage.setItem( 'storedHighscores', JSON.stringify( storedHighscores ) );

// 	// window.location = './Assets/html/highscores.html';


//   // console.log("sethigh score")
  
// // };
// var submitInitialsButton = document.querySelector("#submitInitialsButton");
// var submitInitialsform = document.querySelector("#initialsForm");

document.getElementById("initialsForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // create user object from submission
  var highscores = {
   userInitials: initials.value.trim(),
    wins: winCounter,
    timeLeft: timerCount+"seconds"
  };
localStorage.setItem("highscores", JSON.stringify(highscores));
  console.log(highscores)
  
  setInterval(setHighScoreLabel, 2000)
  // // set new submission to local storage 
  
  // console.log(highscores)
})
 function setHighScoreLabel(){
  $(".visitHighscore").css({ display: "block" })
 }




