
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

// function that calls the game 5 times
function game(){
    let playerScore = 0;
    let computerScore =0;


     let computerSelection =getComputerChoice()
     let playerSelection = getPlayerChoice()
   let round = gameround(computerSelection, playerSelection)
   if(round == ("a tie")){
   }
   else if(round ==("player wins")){
     playerScore++  
     console.log(playerScore)
   } 
   else {
     computerScore++
     console.log(computerScore)
   }
   if(playerScore==5){
    console.log("player wins")
   }
   if(computerScore==5){
    console.log("computer wins")
   }
   while (playerScore <= 5 || computerScore <=5 ){

    game()
  }
}


// let rockb = document.querySelector('.rock')
// let body = document.querySelector('body')
// function colorers(){
//   body.style.backgroundColor = 'red';
// }

// rockb.addEventListener('click',colorers)
