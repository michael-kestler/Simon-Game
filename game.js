// alert("javascript is working")

let gamePattern = [];

let buttonColors = ["red", "blue", "green", "yellow"];


function nextSequence(){

  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let randomChosenColor = buttonColors[randomNumber];
  return randomChosenColor;
}
