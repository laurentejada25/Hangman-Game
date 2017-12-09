//broad level understanding
// wordbank a word will be selected
//display the word with _ instead of letters
//1. user is going to click a key
//is the key correct
//if all the letters are guessed they win
//if they run out of guesses they lose


//Begin to write some more specific comments
//wordbank would be an array
//pick a random word from the array

//variables
//wins, losses, guesses left, chosen word, word bank, guessed letters

//diplsay the word (function)

//some piece of code for when a user clicks a keyboard key( RPS)
//comparison for if the key is right
//update the letters on the screen
//if they guess the whole word they win
//starts over
//new word
//wins goes up

//comparison for if its wrong
//lose a guess
//if theyre out of guesses they lose
//if(guesses <= 0) -->


// variables listed here
var wordBank = ["Mutants", "Avengers", "Wolverine", "Hulk"];

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

var guessedLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"]; 

var wordChosen = ""

var wins = ""
 
var losses = "" 

var blanks = [];

var numBlanks = 0;


//for-loop to iterate through letters of the array
// for(var i = 0; i < letters.length; i++){
// 	console.log(letters[i])
// }

// function Mutants(x){
// 	var lettersMutants = ["M", "U", "T", "A", "N", "S"];
// 	if(lettersMutants.indexOf(x) > -1){
// 	} else {
// 		//add number to wrong letters list
// 	}
// }

//grabs value from keys
document.onkeyup = function(event){
	var keyPressed = event.key;
	console.log(keyPressed);
}

function computerChoice(){
	wordChosen = wordBank[Math.floor(Math.random() * wordBank.length)];
	console.log(wordChosen);
	var x = document.getElementById("key-pressed");
	x.innerHTML = wordChosen
}
computerChoice();

//create a for loop to populate the underscores
for (var i = 0; i < numBlanks.length; i++) {
	blanks[i]
}


// var myArrIndex = Math.floor(Math.random() * myArr.length);
// 	myArr[myArrIndex];


// How to get a random item from an array
// var myArr = ["some", "cool", "stuff"];
// 			// random value from 0 to 2 in the array
// var myArrIndex = Math.floor(Math.random() * myArr.length);
// myArr[myArrIndex];
