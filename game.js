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

// gamePattern.push(nextSequence());

$( ".btn" ).click(function() {
  let userChosenColor = $(this).attr("id");
  // alert( "User clicked on the " + userChosenColor + " button.");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);

  // console.log(userClickedPattern);
});



function nextSequence(){

  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let randomChosenColor = buttonColors[randomNumber];
 gamePattern.push(randomChosenColor);

   $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

   playSound(randomChosenColor);
   animatePress(randomChosenColor);

}



function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");

  audio.play();
}

function animatePress(currentColor){

  $("." + currentColor).addClass('pressed');

  setTimeout(function(){
    $("." + currentColor).removeClass('pressed');
  }, 100);

}
