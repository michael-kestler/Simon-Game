// alert("javascript is working")

let gamePattern = [];

// gamePattern.push(nextSequence());

let buttonColors = ["red", "blue", "green", "yellow"];


function nextSequence(){

  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let randomChosenColor = buttonColors[randomNumber];
 gamePattern.push(randomChosenColor);
 return gamePattern;

}
