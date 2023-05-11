var win = document.querySelector(".correctA");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var results = document.querySelector(".results")
var answersBtn = document.querySelectorAll(".answersBtn");

// var questionsTitle = $('.questionsTitle');
var questionsTitle = document.getElementById("questionsTitle");
var startTitle = document.getElementById("#startTitle");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

var answersContainerDiv = $("#answersContainer");
let currentQuestionIndex = 0;
let winCounter;
let timerCount;
let highscores = JSON.parse(localStorage.getItem('highscores')) || []
const btnbyId = [btn1, btn2, btn3, btn4]
btn1.disabled = true;
btn2.disabled = true;
btn3.disabled = true;
btn4.disabled = true;
startButton.addEventListener("click", startGame);
// The startGame function is called when the start button is clicked
function startGame() {
  $("#buttonInitials").css({ display: "none" });
  $("#startTitle").css({ display: "none" });
  $(".game_description").css({ display: "none" });
  results.classList.remove("hidden");
  //enable buttons
  btn1.disabled = false;
  btn2.disabled = false;
  btn3.disabled = false;
  btn4.disabled = false;
  isWin = false;
  timerCount = 60;
  startButton.disabled = true;
  startButton.classList.add("hidden")
  winCounter = 0;
  renderQuestions();
  startTimer();
}

// Updates the timer value to immediate value
function updateTimerValue() {
  timerElement.textContent = `${timerCount}`;
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  $("#gameOver").css({ display: 'none' })
  // Sets timer
  timerInterval = setInterval(function () {
    timerCount -= 1;
    updateTimerValue();
    if (timerCount <= 0 || currentQuestionIndex === questions.length) {
      gameOver();
    }
  }, 1000);
}

function hideIncorrect() {
  $(".incorrect").css({ display: "none" })
}

// The loseGame function is called when timer reaches 0
function incorrectAnswer() {
  // document.getElementById("startTitle").innerHTML = "INCORRECT";
  timerCount -= 5;
  $(".incorrect").css({ display: "block" })
  setInterval(hideIncorrect, 1000)
}

function correctAnswer() {
  // document.getElementById("startTitle").innerHTML = "CORRECT!!!🏆 ";
  winCounter++;
  win.textContent = winCounter;
}

function gameOver() {
  document.getElementById("startTitle").innerHTML = `GAME OVER!`;
  document.getElementById("questionsTitle").classList.add("hidden");
  $("#gameOver").css({ display: 'block' })
  $("#inlineFormInput").css({ display: "block" });
  $(".initials").css({ display: "block" });
  $("#startTitle").css({ display: "block" });
  $("#startTitle").textContent = ("GAME OVER");
  startButton.disabled = false;
  // disable buttons for game over screen
  btn1.disabled = true;
  btn2.disabled = true;
  btn3.disabled = true;
  btn4.disabled = true;
  win.textContent = winCounter;
  updateTimerValue();
  clearInterval(timerInterval);
}

function renderQuestions() {
  questionsTitle.textContent = questions[currentQuestionIndex].question;
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
    } else {
      incorrectAnswer();
    }
    if (currentQuestionIndex < 24) {
      renderQuestions();
    } else {
      gameOver();
      currentQuestionIndex = 0;
      renderQuestions();
    }
  });
}

//event listener
document.getElementById("initialsForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const highscoreBtn = document.querySelector('.highscoreBtn')
  highscoreBtn.classList.remove("hidden")
  const score = {
    userInitials: initials.value.trim(),
    score: winCounter,
    timeLeft: timerCount
  };
  let worstScore = 0;
  if (score.score > 4) {
    worstScore = hiscores[hiscores.length - 1].score;
  }
  highscores.push(score)
  highscores.sort((a, b) => a.score > b.score ? -1 : 1);
  if (highscores.length > 5) {
    console.log("highscore length is greater than 5",)
    highscores.pop();
    console.log("ORANGES")
  }
  localStorage.setItem("highscores", JSON.stringify(highscores));
  console.log("not even elses", highscores)
})

// quiz game questions
var questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["<scripting>", "<js>", "<script>", "<javascript>"],
    //correct answers
    correctAnswer: "<script>",
  },
  {
    question: "What is the correct JavaScript syntax to change the content of the HTML element below?",
    answers: [' #demo.innerHTML = "Hello World!";', ' document.getElement("p").innerHTML = "Hello World!";', ' document.getElementById("demo").innerHTML = "Hello World!";', ' document.getElementByName("p").innerHTML = "Hello World!";'],
    //correct answers
    correctAnswer: 'document.getElementById("demo").innerHTML = "Hello World!";',
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: [" The <head> section", " Both the <head> section and the <body> section are correct", " The <body> section"],
    //correct answers
    correctAnswer: "Both the <head> section and the <body> section are correct",
  },
  {
    question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    answers: [' <script name="xxx.js">', ' <script href="xxx.js">', ' <script src="xxx.js">'],
    //correct answers
    correctAnswer: '<script src="xxx.js">',
  },
  {
    question: 'The external JavaScript file must contain the <script> tag.',
    answers: [' True', ' False'],
    //correct answers
    correctAnswer: 'False',
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    answers: [' alert("Hello World");', '  msgBox("Hello World");', ' msg("Hello World");', ' alertBox("Hello World");'],
    //correct answers
    correctAnswer: 'alert("Hello World");',
  },
  {
    question: 'How do you create a function in JavaScript?',
    answers: ['  function = myFunction()', '  function:myFunction()', ' function myFunction()'],
    //correct answers
    correctAnswer: 'function myFunction()',
  },
  {
    question: 'How do you call a function named "myFunction"?',
    answers: [' call function myFunction()', ' call myFunction()', ' myFunction()'],
    //correct answers
    correctAnswer: 'myFunction()',
  },
  {
    question: 'How to write an IF statement in JavaScript?',
    answers: [' if (i == 5)', ' if i == 5 then', ' if i = 5 then', ' if i = 5'],
    //correct answers
    correctAnswer: 'if (i == 5)',
  },
  {
    question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    answers: [' if i <> 5', ' if i =! 5 then', ' if (i != 5)', ' if (i <> 5)'],
    //correct answers
    correctAnswer: 'if (i != 5)',
  },
  {
    question: 'How does a WHILE loop start?',
    answers: [' while (i <= 10)', ' while i = 1 to 10', ' while (i <= 10; i++)'],
    //correct answers
    correctAnswer: 'while (i <= 10)',
  },
  // correct answer may be incorrect
  {
    question: 'How does a FOR loop start?',
    answers: [' for (i = 0; i <= 5)', ' for (i <= 5; i++)', ' for (i = 0; i <= 5; i++)', ' for i = 1 to 5'],
    //correct answers
    correctAnswer: 'for (i = 0; i <= 5; i++)',
  },
  {
    question: 'How can you add a comment in a JavaScript?',
    answers: ["  'This is a comment", ' //This is a comment', ' <!--This is a comment-->'],
    //correct answers
    correctAnswer: '//This is a comment',
  },
  {
    question: 'How to insert a comment that has more than one line?',
    answers: [
      ` <!--This comment has <br> more than one line-->`, ` //This is a comment <br> more than one line//`, ` /*This comment has <br> more than one line*/`],
    //correct answers
    correctAnswer: '//This is a comment',
  },
  {
    question: 'What is the correct way to write a JavaScript array?',
    answers: [' var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', ' var colors = "red", "green", "blue"', ' var colors = (1:"red", 2:"green", 3:"blue")', ' var colors = ["red", "green", "blue"]'],
    //correct answers
    correctAnswer: '//This is a comment',
  },
  {
    question: 'How do you round the number 7.25, to the nearest integer?',
    answers: [' round(7.25)', ' rnd(7.25)', ' Math.round(7.25)', ' Math.rnd(7.25)'],
    //correct answers
    correctAnswer: 'Math.round(7.25)',
  },
  {
    question: 'How do you find the number with the highest value of x and y?',
    answers: [' Math.ceil(x, y)', ' Math.max(x, y)', ' top(x, y)', ' ceil(x, y)'],
    //correct answers
    correctAnswer: 'Math.max(x, y)',
  },
  {
    question: 'What is the correct JavaScript syntax for opening a new window called "w2" ?',
    answers: [' w2 = window.new("http://www.w3schools.com");', ' w2 = window.open("http://www.w3schools.com");'],
    //correct answers
    correctAnswer: 'w2 = window.open("http://www.w3schools.com");',
  },
  {
    question: 'JavaScript is the same as Java.',
    answers: [' True', ' False'],
    //correct answers
    correctAnswer: 'False',
  },
  {
    question: "How can you detect the client's browser name?",
    answers: [' navigator.appName', ' browser.name', ' client.navNames'],
    //correct answers
    correctAnswer: 'navigator.appName',
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: [' onchange', ' onmouseover', ' onmouseclick', ' onclick'],
    //correct answers
    correctAnswer: 'onclick',
  },
  {
    question: "How do you declare a JavaScript variable?",
    answers: [' variable carName;', ' var carName;', ' v carName;'],
    //correct answers
    correctAnswer: 'var carName;',
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    answers: [' *', ' =', ' X', ' -'],
    //correct answers
    correctAnswer: '=',
  },
  {
    question: "What will the following code return: Boolean(10 > 9)",
    answers: [' false', ' true', ' NaN'],
    //correct answers
    correctAnswer: 'true',
  },
  {
    question: "Is JavaScript case-sensitive?",
    answers: [' No', ' Yes'],
    //correct answers
    correctAnswer: 'Yes',
  },
];
