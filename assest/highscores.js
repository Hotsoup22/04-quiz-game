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
          
     
  for( var i = 0; i < highscores.length; i++ ) {
    var li = document.createElement( 'li' );
    li.textContent = `${i+1}. ${highscores[i].initals} --- ${highscores[i].answerScore} Correct --- ${highscores[i].timeScore} Seconds remaining`;
    highscoresListEl.append( li );
  }
  
  // Event Listener clear scores
  // clearScoresBtn.addEventListener( 'click', function() {
  //   localStorage.clear();
  //   location.reload();
  // } );
}
