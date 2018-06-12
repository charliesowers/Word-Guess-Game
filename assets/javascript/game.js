var words = ['blues', 'gray', 'pink']; //the array of words

var started = false; //indicates whether the game is started or if the next button press needs to start the game

var guessesLeft= 6;

var wordsInd = 0; //where in the word array we are, starts at 0
var winsCount = 0; 
var lossesCount = 0;

var youChose = document.getElementById('you-chose');   //naming all the elements
var guesses = document.getElementById('guesses-left');
var guessSoFar = document.getElementById('guesses-so-far');
var wordDisp = document.getElementById('word');
var wins = document.getElementById('wins');
var losses = document.getElementById('losses');

youChose.textContent = 'Press Any Key to Begin!'; //initial text when you load the site

var word;
var wordDispText;
var wordGuess;
var guessSoFarText;


document.onkeyup = function(event) {

    if (wordsInd < words.length){

        if(started === false){

            word = words[wordsInd];
            wordDispText = '_ '.repeat(word.length);
            wordGuess = '_'.repeat(word.length);
            guessSoFarText = '';
            guessesLeft = 6;

            youChose.textContent = 'You chose: ';
            guesses.textContent = 'Guesses left: '+ guessesLeft;
            guessSoFar.textContent = 'Guesses so far: ' + guessSoFarText;
            wordDisp.textContent = 'Word: ' + wordDispText;
            wins.textContent = 'Wins: ' + winsCount;
            losses.textContent = 'Losses: ' + lossesCount;

            started = true;
        }

        else{

            guess = event.key;

            if(guessSoFarText.indexOf(guess) > -1){
            }
            else if(word.indexOf(guess) > -1){
                wordSub = word;
                while(wordSub.indexOf(guess) > -1){
                    wordDispText = wordDispText.substr(0, wordSub.indexOf(guess)*2) + guess 
                                    + wordDispText.substr(wordSub.indexOf(guess)*2 + 1);
                    wordGuess= wordGuess.substr(0, wordSub.indexOf(guess)) + guess 
                                + wordGuess.substr(wordSub.indexOf(guess) + 1);
                    wordSub= wordSub.substr(0, wordSub.indexOf(guess)) + ' ' 
                                + wordSub.substr(wordSub.indexOf(guess) + 1);
                }
                guessSoFarText = guessSoFarText + guess + ' ';
            }
            else{
                guessesLeft--;
                guessSoFarText = guessSoFarText + guess + ' ';
            }

            if(wordGuess === word){
                youChose.textContent = 'You Won! press any key to play again';
                guesses.textContent = '';
                guessSoFar.textContent = '';
                wordDisp.textContent = '';
                wins.textContent = '';
                losses.textContent = '';

                winsCount++;
                started = false;
                wordsInd++;
            }

            else if(guessesLeft === 0){
                youChose.textContent = 'You Lost :( press any key to play again';
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
                wordDisp.textContent = 'Word: ' + wordDispText;
                wins.textContent = 'Wins: ' + winsCount;
                losses.textContent = 'Losses: ' + lossesCount;
            }

        }
    
    }
        // alternate way: document.querySelector("#game").innerHTML = html;
        // assign html as some string that is html code 
        // 'game' is the name of the id that this would go in
        
};