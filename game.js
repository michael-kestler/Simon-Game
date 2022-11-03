alert("javascript is working")


window.onload = function() {
    if (window.jQuery) {
        // jQuery is loaded
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}



let gamePattern = [];

let userClickedPattern = [];

// gamePattern.push(nextSequence());

let buttonColors = ["red", "blue", "green", "yellow"];


function nextSequence(){

  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let randomChosenColor = buttonColors[randomNumber];
 gamePattern.push(randomChosenColor);

   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);


   var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
   audio.play();


}

$( ".btn" ).click(function() {
  alert( "Handler for .click() called." );
});
