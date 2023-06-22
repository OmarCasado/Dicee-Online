// var randomNumber1 = Math.floor(Math.random()*6) + 1;

var player1 = prompt("Player 1 name:");
var player2 = prompt("Player 2 name:");

document.querySelector(".player1").textContent = player1;
document.querySelector(".player2").textContent = player2;




function rollTheDices() {
    var imagesArray1 = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
    var imagesArray2 = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
    var randomImage1 = Math.floor(Math.random()*imagesArray1.length);
    var randomImage2 = Math.floor(Math.random()*imagesArray2.length);
    document.querySelector(".img1").setAttribute("src", imagesArray1[randomImage1]); 
    document.querySelector(".img2").setAttribute("src", imagesArray2[randomImage2]); 



    /* CHANGE THE IMAGES AT INTERVALS CODE */

    var interval = 100; // Interval in milliseconds 
    var duration = 3000; // Duration in milliseconds
    var startTime = Date.now();

    var diceInterval = setInterval(function() {
    var elapsedTime = Date.now() - startTime;

    if (elapsedTime >= duration) {
        clearInterval(diceInterval);
        finalizeResult();
    } else {
        var randomImage1 = Math.floor(Math.random() * imagesArray1.length);
        var randomImage2 = Math.floor(Math.random() * imagesArray2.length);
        document.querySelector(".img1").setAttribute("src", imagesArray1[randomImage1]);
        document.querySelector(".img2").setAttribute("src", imagesArray2[randomImage2]);
    }
    }, interval);

    function finalizeResult() {
        var randomImage1 = Math.floor(Math.random() * imagesArray1.length);
        var randomImage2 = Math.floor(Math.random() * imagesArray2.length);
        document.querySelector(".img1").setAttribute("src", imagesArray1[randomImage1]);
        document.querySelector(".img2").setAttribute("src", imagesArray2[randomImage2]);


    /* SELECT AND PRINT THE WINNER */

    if (randomImage1 > randomImage2) {
        document.querySelector("h1").textContent = player1 + " Wins!";
    } else if (randomImage1 < randomImage2) {
        document.querySelector("h1").textContent = player2 + " Wins!";
    } else if (randomImage1 === randomImage2) {
        document.querySelector("h1").textContent = "Draw. Try again!";
    } 
    }
}

document.querySelector("button").onclick = function() {rollTheDices()};

