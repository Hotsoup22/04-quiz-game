console.log('we are in');
var storedLosses = localStorage.getItem("loseCount");
var storedWins = localStorage.getItem("winCount");
var winLossContainer = document.querySelector('.win-loss-container');
var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
var initials = document.getElementById('#initials');
var initialsBtn = document.getElementById('#buttonInitials');
// var finalWinScore = (winCounter)
// var finalLoseScore = (loseCounter)
console.log(highscores);
console.log(initials);
function showHighScore(){


      initials = initals.value;
    
     
   
    // console.log
     var li  = document.createElement("li");
     const scores = document.querySelector(".win-loss-container")
    // var words = document.createTextNode(highscores)  ; //content of p
     scores.appendChild(li);
     li.appendChild(initials);
    // winLossContainer.append(words);
  
}