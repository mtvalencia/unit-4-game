// Set up our variables global
var score = 0;
var wins = 0;
var losses = 0;
var gameOver = false;
document.getElementById("s1").innerHTML = score;
document.getElementById("w1").innerHTML = "Wins: " + wins + "   ";
document.getElementById("l1").innerHTML = "Losses: " + losses + " ";

//Set up initial random game values
var cpuNum = Math.floor(Math.random() * (120 - 19)) + 19; console.log("cpu: " + cpuNum);
document.getElementById("cpu").innerHTML = cpuNum;
var gem1 = Math.floor(Math.random() * (12 - 1)) + 1; console.log("c1: " + gem1);
var gem2 = Math.floor(Math.random() * (12 - 1)) + 1; console.log("c2: " + gem2);
var gem3 = Math.floor(Math.random() * (12 - 1)) + 1; console.log("c3: " + gem3);
var gem4 = Math.floor(Math.random() * (12 - 1)) + 1; console.log("c4: " + gem4);

//Start game over
function reset() {
    score = 0;console.log(score);
    document.getElementById("s1").innerHTML = score;
    gameOver = false;
    cpuNum = Math.floor(Math.random() * (120 - 19)) + 19; console.log(cpuNum);
    document.getElementById("cpu").innerHTML = cpuNum;
    gem1 = Math.floor(Math.random() * (12 - 1)) + 1; console.log(gem1);
    gem2 = Math.floor(Math.random() * (12 - 1)) + 1; console.log(gem2);
    gem3 = Math.floor(Math.random() * (12 - 1)) + 1; console.log(gem3);
    gem4 = Math.floor(Math.random() * (12 - 1)) + 1; console.log(gem4);
}

// Game functions on click events
function goGem1() {
    if (score < cpuNum || gameOver === false) {
        score += gem1;
        gameOver = true;
        document.getElementById("s1").innerHTML = score;
    }   else if (score === cpuNum) {
        wins += 1;
        document.getElementById("w1").innerHTML = "Wins: " + wins;
        reset();
    }
        else {
        losses += 1;
        document.getElementById("l1").innerHTML = "Losses: " + losses;
        reset();
    }
}

function goGem2() {
    if (score < cpuNum || gameOver === false) {
        score += gem2;
        gameOver = true;
        document.getElementById("s1").innerHTML = score;
    }   else if (score === cpuNum) {
        wins += 1;
        document.getElementById("w1").innerHTML = "Wins: " + wins;
        reset();
    }
        else {
        losses += 1;
        document.getElementById("l1").innerHTML = "Losses: " + losses;
        reset();
    }
}

function goGem3() {
    if (score < cpuNum || gameOver === false) {
        score += gem3;
        gameOver = true;
        document.getElementById("s1").innerHTML = score;
    }   else if (score === cpuNum) {
        wins += 1;
        document.getElementById("w1").innerHTML = "Wins: " + wins;
        reset();
    }
        else {
        losses += 1;
        document.getElementById("l1").innerHTML = "Losses: " + losses;
        reset();
    }
}

function goGem4() {
    if (score < cpuNum || gameOver === false) {
        score += gem4;
        gameOver = true;
        document.getElementById("s1").innerHTML = score;
    }   else if (score === cpuNum) {
        wins += 1;
        document.getElementById("w1").innerHTML = "Wins: " + wins;
        reset();
    }
        else {
        losses += 1;
        document.getElementById("l1").innerHTML = "Losses: " + losses;
        reset();
    }
}

// Gets Link for crystal sound
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/sounds/crystal.mp3");

    $("#c1,#c2,#c3,#c4").on("click", function() {
        audioElement.play();
    });