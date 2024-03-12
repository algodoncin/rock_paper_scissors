let getUserChoice = prompt("Enter your choice between Rock, Paper or Scissor: ");

const getComputerChoice = () => {

    let num = Math.floor(Math.random() * 3) + 1;

    let choice = "";

    if(num == 1){
        choice = "Rock";
    }
    else if(num == 2){
        choice = "Paper";
    }
    else{
        choice = "Scissor"
    }

    return choice
}

const gameRound = (playerSelection, computerSelection) => {
    let player = playerSelection.toLowerCase()
    let computer = computerSelection.toLowerCase();
    console.log(player);
    let result = "";
 
    if(player != "paper" && player != "rock" && player != "scissor"){
        result = `${playerSelection} is not a valid choice`;
    }
    else{
        switch(player){
            case "rock":
                if(computer == "paper"){
                    result = `You lose! ${playerSelection} (You) loses against ${computerSelection} (Computer)`;
                }
                else if(computer == "scissor"){
                    result = `You win! ${playerSelection} (You) beats ${computerSelection} (Computer)`;
                }
                else if(computer == "rock"){
                    result = `${playerSelection} (You) ties ${computerSelection} (Computer)`;
                }
                break;
            case "paper":
                if(computer == "scissor"){
                    result = `You lose! ${playerSelection} (You) loses against ${computerSelection} (Computer)`;
                }
                else if(computer == "rock"){
                    result = `You win! ${playerSelection} (You) beats ${computerSelection} (Computer)`;
                }
                else if(computer == "paper"){
                    result = `${playerSelection} (You) ties ${computerSelection} (Computer)`;
                }
                break;
            case "scissor":
                if(computer == "rock"){
                    result = `You lose! ${playerSelection} (You) loses against ${computerSelection} (Computer)`;
                }
                else if(computer == "paper"){
                    result = `You win! ${playerSelection} (You) beats ${computerSelection} (Computer)`;
                }
                else if(computer == "scissor"){
                    result = `${playerSelection} (You) ties ${computerSelection} (Computer)`;
                }
                break;
        }
    }

    

    return result
}

let i = 0;
let playerScore = 0;
let PCScore = 0;

for(i ; i < 5 ; i++){
    console.log(i);
}
console.log(gameRound(getUserChoice, getComputerChoice())); 