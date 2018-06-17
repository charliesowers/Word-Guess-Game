var words = ['djibouti', 'kazakhstan', 'uruguay', 'lichtenstein']; //the array of words
var pics = ["djibouti.png", "kazakhstan.png", "uruguay.png", "lichtenstein.png" ];

var started = false; //indicates whether the game is started or if the next button press needs to start the game

var guessesLeft= 7;

var wordsInd = 0; //where in the word array we are, starts at 0
var winsCount = 0; 
var lossesCount = 0;

var youChose = document.getElementById('you-chose');   //naming all the elements
var guesses = document.getElementById('guesses-left');
var guessSoFar = document.getElementById('guesses-so-far');
var wordDisp = document.getElementById('word');
var wins = document.getElementById('wins');
var losses = document.getElementById('losses');

youChose.textContent = 'Welcome to Countries of the World Hangman! Press Any Key to Begin!'; //initial text when you load the site

var word;
var wordDispText;
var wordGuess;
var guessSoFarText;

document.body.style.backgroundImage = "url('./assets/images/world_map_7.png')";


document.onkeyup = function(event) {

    if (wordsInd < words.length){

        if(started === false){

            word = words[wordsInd];
            wordGuess = '_'.repeat(word.length);
            guessSoFarText = '';
            guessesLeft = 7;
            document.body.style.backgroundImage = "url('./assets/images/world_map_7.png')";

            youChose.textContent = 'You chose: ';
            guesses.textContent = 'Guesses left: '+ guessesLeft;
            guessSoFar.textContent = 'Guesses so far: ' + guessSoFarText;
            wordDisp.textContent = wordGuess;
            wins.textContent = 'Wins: ' + winsCount;
            losses.textContent = 'Losses: ' + lossesCount;

            started = true;
        }

        else if('abcdefghijklmnopqrstuvwxyz'.indexOf(event.key.toLowerCase()) > -1){
            // if the game is started and the player chose a letter (uppercase is forced to lowercase)
            var guess = event.key.toLowerCase();

            if(word.indexOf(guess) > -1 && guessSoFarText.indexOf(guess) === -1){ //test if letter is part of word and has not been guessed
                wordSub = word;
                while(wordSub.indexOf(guess) > -1){ //have to loop through in case a letter appears multiple times
                    wordGuess= wordGuess.substr(0, wordSub.indexOf(guess)) + guess 
                                + wordGuess.substr(wordSub.indexOf(guess) + 1);
                    wordSub= wordSub.substr(0, wordSub.indexOf(guess)) + ' ' 
                                + wordSub.substr(wordSub.indexOf(guess) + 1);
                    //add the character to the display and add it to the variable that will be compared to the solution
                }
                guessSoFarText = guessSoFarText + guess + ' ';
            }
            else if(guessSoFarText.indexOf(guess) === -1){ //if letter is not part of word and has not been guessed
                guessesLeft--;
                document.body.style.backgroundImage = "url('./assets/images/world_map_" + guessesLeft + ".png')";
                guessSoFarText = guessSoFarText + guess + ' ';
            }

            if(wordGuess === word){
                youChose.textContent = 'You Won! The country was ' + word +'. Press any key to play again';
                guesses.textContent = '';
                guessSoFar.textContent = '';
                wordDisp.textContent = '';
                wins.textContent = '';
                losses.textContent = '';

                document.body.style.backgroundImage = "url('./assets/images/" + pics[wordsInd] + "')";


                winsCount++;
                started = false;
                wordsInd++;
            }

            else if(guessesLeft === 0){
                youChose.textContent = 'You Lost :( The country was ' + word + '. Press any key to play again';
                guesses.textContent = '';
                guessSoFar.textContent = '';
                wordDisp.textContent = '';
                wins.textContent = '';
                losses.textContent = '';

                lossesCount++;
                started = false;
                wordsInd++;
            }
            else{
                youChose.textContent = 'You chose: '+ guess;
                guesses.textContent = 'Guesses left: '+ guessesLeft;
                guessSoFar.textContent = 'Guesses so far: ' + guessSoFarText;
                wordDisp.textContent = wordGuess;
                wins.textContent = 'Wins: ' + winsCount;
                losses.textContent = 'Losses: ' + lossesCount;
            }

        }
    
    }
        // alternate way: document.querySelector("#game").innerHTML = html;
        // assign html as some string that is html code 
        // 'game' is the name of the id that this would go in
        
};