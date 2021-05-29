//global var
var startButton = $('#startButton') ;
var startGameContainer = $('.startGameContainer');
var score = $('#score')
var hidden = $('.hidden');
var hiddenAfterGameStart = $('.hiddenAfterGameStart')

//startButton function

startButton.on( 'click', function(event) {
    hidden.css({'display' : 'block'});
    hiddenAfterGameStart.css({'display': 'none'});
    // event.preventDefault();
    
    hidden.setAttribute("style", "display"," block");
})




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
 

// DEclare a starting 'score`

//Declare an array list of 'questions'
    //WHERE each value is an object to define a question and its properties 

//DECLARE an `questionIndex` to point to the current question

// Store a reference to the element to the 'timerDisplayEl'
//Store a refrence to the 'StartButtonEl'

//create 'stateGame' function

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
