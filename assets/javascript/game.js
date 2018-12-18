// Run on DOM load
$(document).ready(function () {
    console.log("it works!");

    var redVal = 0;
    var blueVal = 0;
    var greenVal = 0;
    var yellowVal = 0;
    // user number
    var userNumber = 0;
    // var computerNumber = 0;   // vestigal
    var computerGuess;
    console.log(computerNumber);
    compNum();
    console.log(computerGuess);

    console.log(computerNumber);
    









    // Game Functions
    //****************************************/

    function compNum() {
        computerGuess = Math.floor(Math.random() * (120 - 19) + 19);
    }

    function redCrystal() {
        console.log("Red");
        redVal = Math.floor((Math.random() * 12) + 1);
        console.log(redVal);
    }

    function blueCrystal() {
        console.log("blue");
        blueVal = Math.floor((Math.random() * 12) + 1);
        console.log(blueVal);
    }

    function greenCrystal() {
        console.log("green");
        greenVal = Math.floor((Math.random() * 12) + 1);
        console.log(greenVal);
    }

    function yellowCrystal() {
        console.log("yellow");
        yellowVal = Math.floor((Math.random() * 12) + 1);
        console.log(yellowVal);
    }

    function resetGame() {
        userNumber = 0;
    }

});