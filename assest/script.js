//global var
var body = document.body;

//class
var hidden = $('.hidden');
var hiddenAfterGameStart = $('.hiddenAfterGameStart');
var answersContainer =$('#answersContainer');

//id
var startGame = $('#startGame') ;
var score = $('#score');
var questionsContaioiner = $('#questionsContainer');

//stats var
var timer =$('#timer');
var score =0;
var questionIndex = 0;
// Creates new element
var ulCreate = document.createElement("ul");

//created questions/objvariables and answers with values set as array's

var questions = [
    {
    question: "What color is a apple?",
    answer: {
        a: 'red',
        b: 'oragne',
        c: 'yellow',
    },
    //correct answers
    correctAnswer: 'a'
    },
    {
        //created questions
        question: "what color is a lychee",
        answer: {
            a: 'brown',
            b: 'pink-red',
            c: 'red-yellow',
        },
        //correct answers
        correctAnswer: 'b'
    }

];
 



//startgame function
startGame.on( 'click', function(event){
     //hide show containers 
    hidden.css({'display' : 'block'});
    hiddenAfterGameStart.css({'display': 'none'});
    startTimer();
    askquestions(questionIndex);

   
    // startScore();
   

});



function startTimer(){
        var sec = 30;
        var timer = setInterval(function(){
            document.getElementById('timer').innerHTML='Time Remaining'+'00:'+sec;
            sec--;
            if (sec < 0) {
                clearInterval(timer);
            }
        }, 1000);
    }




function askquestions(questionIndex){
    

     // Clears existing data 
    questionsContainer.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loop. through my questions obj.
    for (var i = 0; i < questions.length; i++) {
        // displays question
        var showQuestion = questions[questionIndex].question;
        //display answer
        var userAnswers = questions[questionIndex].answer;
        // questions.textContent = showQuestion;
        questionsContainer.textContent = showQuestion;
     
        // 
    }

    //
    questions.keys(userAnswers).array.forEach(element => {
        
    });(function (key){
      
        //creates answers in buttonschoices
    var listAnswer = document.createElement("li");
     listAnswer.textContent = newAnswers;
     questionsContainer.appendChild(ulCreate);
     ulCreate.appendChild(listAnswer);
     listAnswer.addEventListener("click");
     listAnswer.appendChild(document.createTextNode.answer);
    
  
    console.log(answer[key] +'this');
});

    
 }
// New for each for question choices
// Useranswer.forEach(function (newItem) {
//     var listItem = document.createElement("li");
//     listItem.textContent = newItem;
//     questions.appendChild(ulCreate);
//     ulCreate.appendChild(listItem);
//     listItem.addEventListener("click", (compare));
// })

    

      
    




















// function startGame(questions, quizContainer, resultsContainer, submitButton){
//     function showQuestions(questions, quizContainer){
//         var output =[];
//         var answers = [];
//         for(var i=0; i<questions.length; i++){
//     //reset the list
//             answers=[];
// // for each available answer to this question...
//             for(letter in questions[i].answers){

// // ...add an html radio button
// 			answers.push(
// 				'<label>'
// 					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
// 					+ letter + ': '
// 					+ questions[i].answers[letter]
// 				+ '</label>'
// 			);
// 		}
//         quizContainer.innerHTML = output.join('');
// // }
// //     }
    
// //     function showResults(questions,quizContainer,resultsContainer){

//     }
//     showQuestions(questions, quizContainer);

//     submitButton.onclick = function(){
//         showResults(questions, quizContainer, resultsContainer);

//         }
//     }




// startButton.on( 'click', function(event) {
//     //hide show containers 
//     hidden.css({'display' : 'block'});
//     hiddenAfterGameStart.css({'display': 'none'});
//     // event.preventDefault();
//   shuffledQuestions = questions.sort(() => Math.random() -.5)
//   currentQuestionsIndex = 0
//     setNextQuestion();
    
// })
// DEclare a starting 'score`

// function setNextQuestion(){
//     var question1 = ["What color is a apple?"]

// }




// function addAnswers1(){
//     var answers4Q1 = ["blue", "green" , "gold" ,"red"]
//  for (var i= 0; i<answers4Q1.length; i++){
//          multipleChoice.createElement("button");
//          var t = document.createTextNode(answers4Q1[i]);
//          btn.appendChild(t);
//          document.body.appendChild(btn);

//     }


// }


//need a return to home function it currently blanks....debugtime

//hide and show necessary containers


// function hideShowContainers(){
 
 
 
    // if (state == 'block') {
    //     document.getElementById(id).style.display = 'none';
    // } else {
    //     document.getElementById(id).style.display = 'block';
    //    
    // }

// };
 



//Declare an array list of 'questions'

    //WHERE each value is an object to define a question and its properties 

//DECLARE an `questionIndex` to point to the current question

// Store a reference to the element to the 'timerDisplayEl'
//Store a refrence to the 'StartButtonEl'

//create 'startGame' function

    // call 'startTimer`
    //initializing the string 'timeleft' value
    //start the running countdown on the timer
    //hide the start screen element and show the first question
// create `endGmae` function
//create `startTimer` Function

    //initializing the starting 'score' value
    //start the running countdown on the `score`
    //Hide the start screen element and show the first question

// Create `answerQuestion` function 
    //add button listner
    //get the value associate with the clicked `button`
    //compare it against the correct answer for the current question
        //if incorrect...
            //subract points from the `score`   
    //continue to the next question   `renderCurrentQuestion()`
// Create `renderCurrentQuestion` function 
    // access the current question data from questions[questionIndex]
