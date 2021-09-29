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
  storedHighscores.sort( function( a, b ) {
    var answerA = a.answerScore;
    var timeA = a.timeScore;
    var answerB = b.answerScore;
    var timeB = b.timeScore;
  
    return ( answerA < answerB ? 1 : ( answerA > answerB ? -1 : ( answerA === answerB ? ( timeA < timeB ? 1 : ( timeA > timeB ? -1 : 0 ) ) : null ) ) );
  } );

     
  
}