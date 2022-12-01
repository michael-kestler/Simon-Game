// alert("javascript is working")
//
//
// window.onload = function() {
//     if (window.jQuery) {
//         // jQuery is loaded
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }


let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let started = false;

let level = 0;

$(document).keypress(function() {
  if(!started) {
        // do something
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
  }
// alert("key has been pressed");

});

// gamePattern.push(nextSequence());

$( ".btn" ).click(function() {
  let userChosenColor = $(this).attr("id");
  // alert( "User clicked on the " + userChosenColor + " button.");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);

  // Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
  checkAnswer(userClickedPattern.length-1);
  console.log(userClickedPattern);
});



function nextSequence(){
//Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level
  userClickedPattern = [];

  level++
  console.log(level);
  $("#level-title").text("Level " + level);

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

   $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColor);
   // animatePress(randomChosenColor);
   console.log(gamePattern);


}



function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");

  audio.play();
}

function animatePress(currentColor){

  $("#" + currentColor).addClass('pressed');

  setTimeout(function(){
    $("#" + currentColor).removeClass('pressed');
  }, 100);

}

function checkAnswer(currentLevel){
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    console.log("success");

if(userClickedPattern.length === gamePattern.length){

  setTimeout(function (){
    nextSequence()
  } , 1000);
}



  } else {
   playSound("wrong")
    $(document.body).addClass("game-over");

    setTimeout(function(){
      $(document.body).removeClass("game-over");
    }, 200);
    console.log("wrong");
  }
}
