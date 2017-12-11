var wordBank =["mutants", "hulk", "wolverine"]
var wins = 0;
var losses = 0;
var correct = 0;
var lives = 15;
var lettersGuessed = [];
var letterBlanks = [];
var word = wordBank[Math.floor(Math.random() * wordBank.length)];

var startButton = document.getElementById("startButton");



function gameFunctions() {
	if (letterBlanks.indexOf("_") === -1) {
		wins++;
		// alert("You win!");
	} else {
		losses++;
		// alert("You lose.")
	}
	
	document.getElementById("winCount").innerHTML = wins;
	document.getElementById("lossCount").innerHTML = losses;

	//Let's play again!
	restartTheGame();
	}

function checkGameOver () {
	return livesLeft === 0 || correct == 3;
}


function isValidLetter(letter){
	return alphabet.indexOF(letter) > -1;
	}


function updateWrongGuess() {
	 livesLeft--;
	 document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(" ");
	 document.getElementById("user-lives").innerHTML = livesLeft;
}

function inititalizeGame(){
	for (var i = 0; i < word.length; i++){
		letterBlanks.push("_");
	}
	var blanks = document.getElementById("theWord");
	blanks.innerHTML = letterBlanks.join(" ");
	document.getElementById('user-lives').innerHTML = lives;
}

function replaceBlanks(letter) {
	for (var i = 0; i < word.length; i++) {
		if (word[i] === letter) {
			letterBlanks[i] = letter;
		}
	}
	document.getElementById("theWord").innerHTML = letterBlanks.join(" ");
}

startButton.addEventListener('click', function() {
	inititalizeGame();

	for (var i = 0; i < word.length + 10; i++) {
		document.onkeyup = function(event) {
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			
			if (word.includes(userGuess)) {
				// alert("You guessed a correct letter");
				replaceBlanks(userGuess);
				correct = correct + 1;
				if (correct == word.length) {
						alert("You win!");
				}
			} else {
				lives = lives - 1;
				if (lives == 0) {
						alert("You lose.");
				} else {
					// alert("Wrong letter. You have " + lives + " left.");
					document.getElementById('lettersGuessed').innerHTML += userGuess;
					document.getElementById('user-lives').innerHTML = lives;
				}
			}
		}
	}
})