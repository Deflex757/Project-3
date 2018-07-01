alert("You have 10 guesses. Guess from 1-20.")
var answer = 6;
var guess = prompt("What's your guess?");
var guessCorrect = false;
var Wins = 0;
document.querySelector(".Winclass").innerHTML = "Wins: " + Wins;




for (var i = 0; i < 10; i++) {
    if (answer == guess) {
        guessCorrect = true;
        alert("You Guessed correctly!");
        Wins = Wins++
        document.querySelector(".Winclass").innerHTML = "Wins: " + Wins;
        break;
    }
    else {

        guess = prompt("Try again")
    }
}

if (guessCorrect == false) { alert("You lost!") };

//on("click") {restart()}
document.onkeyup(function (event) {
    console.log(event)
})
