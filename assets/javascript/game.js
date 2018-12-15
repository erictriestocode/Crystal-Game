
$(window).load(function() {
    console.log("it works!");

    var redVal = 0;
    var blueVal = 0;
    var greenVal = 0;
    var yellowVal = 0;
    // user number
    var userNumber = 0;


    redCrystal();
    blueCrystal();
    greenCrystal();
    yellowCrystal();

    // Game Functions
    //****************************************/
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

});