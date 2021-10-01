

var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
var highscoresList = document.querySelector( '#highscoresList' );
var clear = document.querySelector(".clear")
 function showHighScore(){
   for (let i=1; i <= 1; i++){
    console.log(highscores, i);
    var li = document.createElement( 'li' );
       li.textContent = `user Initials: ${highscores.userInitials}
       correct answers: ${highscores.wins} Time left:${highscores.timeLeft}`;
      highscoresList.append( li );
   }
   }
  

  clear.addEventListener("click", function() {
    localStorage.clear();
   })
//   console.log(highscores);

//   //   var li = document.createElement( 'li' );
//   // li.textContent = highscores.userInitials
//   //   highscoresList.append( li );
  
    // for( var i = 0; i < highscores.length; i++ ) {
    //   var li = document.createElement( 'li' );
    //   li.textContent = `${highscores.userInitials} --- ${highscores[i].wins} Correct --- ${storedhighscores[i].timeLeft} Seconds remaining`;
    //   highscoresListEl.append( li );
    // }
  // Event Listener clear scores
  // clearScoresBtn.addEventListener( 'click', function() {

  //   location.reload();
  // } );
 
 showHighScore();