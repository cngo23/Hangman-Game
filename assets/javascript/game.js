var wordBank = ["MICHAEL JORDAN", "JULIUS ERVING", "KAREEM ABDUL-JABBAR", "MAGIC JOHNSON", "WILT CHAMBERLAIN", "OSCAR ROBERTSON", "LARRY BIRD", "KOBE BRYANT", "LEBRON JAMES", "HAKEEM OLAJUWON", "SHAQUILLE O'NEAL", "TIM DUNCAN", "ELGIN BAYLOR", "JERRY WEST", "ISIAH THOMAS", "MOSES MALONE", "CLYDE DREXLER", "DOMINIQUE WILKINS", "PETE MARAVICH", "KARL MALONE", "WALT FRAZIER", "JOHN STOCKTON", "GEORGE GERVIN", "ALLEN IVERSON", "DAVID ROBINSON", "CHARLES BARKLEY", "SCOTTIE PIPPEN", "DIRK NOWITZKI", "KEVIN GARNETT", "STEVE NASH", "DWAYNE WADE", "KEVIN DURANT", "PATRICK EWING", "REGGIE MILLER", "TINY ARCHIBALD", "STEPHEN CURRY", "GARY PAYTON", "RUSSELL WESTBROOK", "JASON KIDD", "JAMES WORTHY", "VINCE CARTER", "BOB COUSY", "PAUL PIERCE", "CHRIS PAUL", "TRACY MCGRADY", "JAMES HARDEN", "DENNIS RODMAN", "BILL WALTON", "SHAWN KEMP", "PENNY HARDAWAY", "KYRIE IRVING", "GIANNIS ANTETOKOUNMPO", "CARMELO ANTHONY", "YAO MING", "MANU GINOBILI"]

var randWord;
var fouls = 6;
var hiddenWord = [];
var guessedLetters = [];
var wrongLetters = [];
var streak = 0;
var counter = 0;
var gameOver = false;






function startGame() {
    
    console.log(fouls);
    
    //selects a random word
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log("random word = " + randWord);
    

    console.log(randWord.length);
    for (var i = 0; i < randWord.length; i++) {
        hiddenWord.push("_");
    }

    function winLose() {
        if(counter === randWord.length){
            alert("Winner");
        }
        else if(fouls === 0){
            alert("You fouled out!!");
        }
    }


    document.onkeyup = function(event){
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            guess = (event.key.toUpperCase());
        //guess = (event.key.toUpperCase());
        console.log(guess);
        }
        if(event.keyCode === 32) {
            guess = (event.key.toUpperCase());
        }
        if(randWord.indexOf(guess) > -1) {
            console.log("yes");
            for(var i = 0; i < randWord.length; i++){
                if(randWord[i] === guess){
                    hiddenWord[i] = guess;
                    console.log(hiddenWord);
                    counter++;
                    streak++;
                    console.log(streak);
                    winLose();
                    
                }
            }
        }
        else{
            wrongLetters.push(guess);
            fouls--;
            console.log(wrongLetters);
            console.log(fouls);
            winLose();
        }
    }
    
  
   

}

startGame();






      








