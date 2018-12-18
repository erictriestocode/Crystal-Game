// Run on DOM load
$(document).ready(function () {
    console.log("it works!");

    // diamond values
    var redVal;
    var blueVal;
    var greenVal;
    var yellowVal;
    // user number
    var userNumber = 0;
    // computer number guessed in compNum function
    var computerGuess;
    // boolean to keep track of first click
    var firstClick = true;
    // keep track of wins and losses
    var wins = 0;
    var losses = 0;

    resetGame();
    $("#compNum").html('Computer Guess: ' + computerGuess);
    $("#userNum").html('User Guess: ' + userNumber);
    $(".wins").html('Wins: ' + wins);
    $(".losses").html('Losses: ' + losses);
    console.log(redVal);
    console.log(blueVal);
    console.log(greenVal);
    console.log(yellowVal);

    $("#redbutton").on("click", function() {
        console.log('you clicked red!')
        userNumber = redVal + userNumber;
        $("#userNum").html('User Guess: ' + userNumber);
        // if (firstclick = true) {
        //     resetGame();
        //     userNumber =  userNumber + redVal;
        //     firstClick = false;
        // } else {
        //     userNumber = userNumber + redVal;
        //  }
    });

    // if (userNumber > computerGuess) {
    //     alert("You lose!");
    //     losses++;
    // }
  
// look up calculator solution!




    // Game Functions
    //****************************************/

    function compNum() {
        computerGuess = Math.floor(Math.random() * (120 - 19) + 19);
    }

    function redCrystal() {
        console.log("Red");
        redVal = Math.floor((Math.random() * 12) + 1);
        // console.log(redVal);
    }

    function blueCrystal() {
        console.log("blue");
        blueVal = Math.floor((Math.random() * 12) + 1);
        // console.log(blueVal);
    }

    function greenCrystal() {
        console.log("green");
        greenVal = Math.floor((Math.random() * 12) + 1);
        // console.log(greenVal);
    }

    function yellowCrystal() {
        console.log("yellow");
        yellowVal = Math.floor((Math.random() * 12) + 1);
        // console.log(yellowVal);
    }

    function resetGame() {
        userNumber = 0;
        redCrystal();
        blueCrystal();
        greenCrystal();
        yellowCrystal();
        compNum();
        firstClick = true;
    }

});