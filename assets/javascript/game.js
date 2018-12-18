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
    $("#wins").html('Wins: ' + wins);
    $("#losses").html('Losses: ' + losses);
    console.log(redVal);
    console.log(blueVal);
    console.log(greenVal);
    console.log(yellowVal);


    // if (userNumber === computerGuess) {
    //     alert('You win!');
    //     wins++;
    //     resetGame();
    // } else if (userNumber > computerGuess){
    //     alert('Ya Blew it!');
    //     losses++;
    // }

    // $("resetButton").on("click", function() {
    //     console.log("Reset Clicked");
    //     resetGame();
    // });

    // look up calculator solution!

    if (userNumber < computerGuess ) {
        buttonClicks();
    } else if ( userNumber === computerGuess) {
        alert("You win!");
        wins++;
        resetGame();
    } else {
        alert('You Lose!')
        losses++;
        resetGame();
    }




    // Game Functions
    //****************************************/

    // have the computer guess its number
    function compNum() {
        computerGuess = Math.floor(Math.random() * (120 - 19) + 19);
    }

    // Main Game Operation
    function buttonClicks() {
        $("#redbutton").on("click", function () {
            console.log('you clicked red!')
            userNumber = redVal + userNumber;
            $("#userNum").html('User Guess: ' + userNumber);
        });

        $("#bluebutton").on("click", function () {
            console.log('you clicked blue!')
            userNumber = blueVal + userNumber;
            $("#userNum").html('User Guess: ' + userNumber);
        });

        $("#greenbutton").on("click", function () {
            console.log('you clicked green!')
            userNumber = greenVal + userNumber;
            $("#userNum").html('User Guess: ' + userNumber);
        });

        $("#yellowbutton").on("click", function () {
            console.log('you clicked yellow!')
            userNumber = yellowVal + userNumber;
            $("#userNum").html('User Guess: ' + userNumber);
        });
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