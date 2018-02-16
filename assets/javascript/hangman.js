var wordBank = ["MICHAEL JORDAN", "JULIUS ERVING", "KAREEM ABDUL JABBAR", "MAGIC JOHNSON", "WILT CHAMBERLAIN", "OSCAR ROBERTSON", "LARRY BIRD", "KOBE BRYANT", "LEBRON JAMES", "HAKEEM OLAJUWON", "SHAQUILLE ONEAL", "TIM DUNCAN", "ELGIN BAYLOR", "JERRY WEST", "ISIAH THOMAS", "MOSES MALONE", "CLYDE DREXLER", "DOMINIQUE WILKINS", "PETE MARAVICH", "KARL MALONE", "WALT FRAZIER", "JOHN STOCKTON", "GEORGE GERVIN", "ALLEN IVERSON", "DAVID ROBINSON", "CHARLES BARKLEY", "SCOTTIE PIPPEN", "DIRK NOWITZKI", "KEVIN GARNETT", "STEVE NASH", "DWAYNE WADE", "KEVIN DURANT", "PATRICK EWING", "REGGIE MILLER", "TINY ARCHIBALD", "STEPHEN CURRY", "GARY PAYTON", "RUSSELL WESTBROOK", "JASON KIDD", "JAMES WORTHY", "VINCE CARTER", "BOB COUSY", "PAUL PIERCE", "CHRIS PAUL", "TRACY MCGRADY", "JAMES HARDEN", "DENNIS RODMAN", "BILL WALTON", "SHAWN KEMP", "PENNY HARDAWAY", "KYRIE IRVING", "GIANNIS ANTETOKOUNMPO", "CARMELO ANTHONY", "YAO MING", "MANU GINOBILI"]

var randWord;
const fouls = 6;
var remainingGuesses = 0;
var hiddenWord = [];
var guessedLetters = [];
var wrongLetters = [];
var streak = 0;
//var counter = 0;
var gameOver = false;


//Reset game
function gameReset() {
    remainingGuesses = fouls;
    randWord = [Math.floor(Math.random() * wordBank.length)];
    console.log("random word = " + randWord);
    guessedLetters = [];
    hiddenWord = [];

    document.getElementById("game").src ="";

    for (var i = 0; i < wordBank[randWord].length; i++) {
        hiddenWord.push("_");
    }
    console.log(hiddenWord);

    document.getElementById("newGame").style.cssText="display: none";
    document.getElementById("fouledOut").style.cssText="display: none";
    document.getElementById("winner").style.cssText="display: none";
    document.getElementById("tryAgain").style.cssText="display: none";
    document.getElementById("win").style.cssText="display: none";
    document.getElementById("loser").style.cssText="display: none";

    

    displayUpdate();

};

function displayUpdate() {

    document.getElementById("streak").innerText = streak;

    var word = "";
    for (var i = 0; i < hiddenWord.length; i++) {
        word += hiddenWord[i];
    }

    document.getElementById("hiddenWord").innerText = word;
    document.getElementById("fouls").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;

};

function evaluate(letter){

    var letterPosition = [];

    for (var i = 0; i < hiddenWord.length; i++) {
        if(wordBank[randWord][i] === letter){
            letterPosition.push(i);
        }
    }
    if(letterPosition.length <= 0){
        remainingGuesses--;
        

    }
    else{
        for(var i = 0; i < letterPosition.length; i++) {
            hiddenWord[letterPosition[i]] = letter;
        }
    }
    

}

function win() {
    if(hiddenWord.indexOf("_") === -1) {
       document.getElementById("winner").style.cssText = "display: block";
        document.getElementById("newGame").style.cssText = "display: block";
        document.getElementById("win").style.cssText = "display: block";
        streak++;
        gameOver = true;
    }
}


function loss() {
    if(remainingGuesses <= 0) {
        
        document.getElementById("fouledOut").style.cssText = "display: block";
        document.getElementById("tryAgain").style.cssText = "display: block";
        document.getElementById("loser").style.cssText = "display: block";
        streak = 0;
        gameOver = true;
        
    }
}


function guess(letter) {
    if(remainingGuesses > 0) {
        if(guessedLetters.indexOf(letter) === -1){
            guessedLetters.push(letter);
            evaluate(letter);
        }
    }
}

document.onkeydown = function(event) {
    if(gameOver
    ){
        gameReset();
        gameOver = false;
    }
    else {
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            guess(event.key.toUpperCase());
            displayUpdate();
            win();
            loss();
        }
        if(event.keyCode === 32) {
            guess (event.key.toUpperCase());
            displayUpdate();
            win();
            loss();
        }
    }
}



