
///////////////////////Function to get computer choice
function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3) + 1;
     if(randomNum == 1){
         return "rock"
     }
     else if(randomNum == 2){
         return "paper"
     }
     else{
         return "scissors"
     }
    
}
////function to get player choice
function getPlayerChoice(){
let playerInput = prompt("Enter your choice: rock, paper, or scissors");
return playerInput;
}

///setting playerchoice to a variable
let playerSelection = getPlayerChoice()
let computerSelection = getComputerChoice()


///function of the individual game and its outcome
function gameround(computerSelection,playerSelection){
    if(computerSelection == playerSelection){
        return("a tie")
    }
    else if(playerSelection =="rock" && computerSelection =="scissors"){
        return("player wins")
    }

    else if(playerSelection =="paper" && computerSelection =="rock"){
       return("player wins")
    }

    else if(playerSelection =="scissors" && computerSelection =="paper"){
       return("player wins")
    }

   else{
    return "computer wins"
   }
}

///function that calls the game 5 times
function game(){
    let playerScore = 0;
    let computerScore =0;
    
for(let i = 0; i<=5; i++){
     let computerSelection =getComputerChoice()
     let playerSelection = getPlayerChoice()
   let round = gameround(computerSelection, playerSelection)
   if(round == ("a tie")){
   }
   else if(round ==("player wins")){
     playerScore++  
   } 
   else {
     computerScore++
   }
}
  if (computerScore>playerScore){
    return "COMPUTER WINS with "+ computerScore + " points"
  }
  else if(computerScore<playerScore){
    return'PLAYER WINS with ' + playerScore + " points"
  }
  else{
    return "it's a tie, computer got " + computerScore + " and player got " + playerScore
  }
 
}
console.log(game())
