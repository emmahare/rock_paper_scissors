function getComputerChoice(){
    let choose = ['rock', 'paper', 'scissors'];
    return choose[Math.floor(Math.random() * choose.length)];
}

let computerChoice = getComputerChoice();
let playerChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();

let playerPoints = 0;
let computerPoints = 0;


//Function for only one single round 
function gameRound(computerChoice, playerChoice){
if(playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissors" && computerChoice == "paper"){
  return playerWinFunction()
}
else if(computerChoice == "rock" && playerChoice == "scissors" || computerChoice == "paper" && playerChoice == "rock" || computerChoice == "scissors" && playerChoice == "paper"){
  return computerWinFunction()
}
else if(playerChoice === computerChoice){
  return tieFunction()
}

else{
  return errorFunction()
}
}

//All the additional little functions
function playerWinFunction(){
    playerPoints++;
   if (playerPoints < 5){console.log("You win! " + playerChoice + " beats " + computerChoice + ". Player now has " + playerPoints + " points, while Computer has " + computerPoints + ".");} else if( playerPoints === 5) {
    console.log("Game end! You win! Player wins at " + playerPoints + "/" + computerPoints + "!!! Rematch?")
   }
}
function computerWinFunction(){
    computerPoints++;
    if (computerPoints < 5){console.log("You lose! " + computerChoice + " beats " + playerChoice + ". Computer now has " + computerPoints + " points, while player has " + playerPoints + ".");} else if (computerPoints === 5){
      console.log("Game end! You lose! Computer wins at " + computerPoints + "/" + playerPoints + " !!! Rematch?")
    }
}
function tieFunction(){
    console.log("Both chose the same! Try again!");
}
function errorFunction(){
    console.log(Error('Something went wrong, please try again'));
}
function restartFunction(){
  playerPoints = 0;
  computerPoints = 0;
  game();
}

//Function for the full game 
function game(){
  while (computerPoints < 5 && playerPoints < 5){
     gameRound(computerChoice, playerChoice);
 
  computerChoice = getComputerChoice();
  playerChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();
  }
   
  if ((computerPoints === 5) || (playerPoints === 5)){
    restartFunction();
  }
}


console.log(game());

