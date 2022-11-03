// alert("javascript is working")

let gamePattern = [];

// gamePattern.push(nextSequence());

let buttonColors = ["red", "blue", "green", "yellow"];


function nextSequence(){

  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let randomChosenColor = buttonColors[randomNumber];
 gamePattern.push(randomChosenColor);

 //1. Use jQuery to select the button with the same id as the randomChosenColour
 //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);


  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
   var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
   audio.play();

}

});
