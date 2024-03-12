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
    let result = "";
    let resultNum = 3;
 
    if(player != "paper" && player != "rock" && player != "scissor"){
        result = `${playerSelection} is not a valid choice`;
    }
    else{
        switch(player){
            case "rock":
                if(computer == "paper"){
                    result = `You lose! ${playerSelection} (You) loses against ${computerSelection} (Computer)`;
                    resultNum = 0;
                }
                else if(computer == "scissor"){
                    result = `You win! ${playerSelection} (You) beats ${computerSelection} (Computer)`;
                    resultNum = 1;
                }
                else if(computer == "rock"){
                    result = `${playerSelection} (You) ties ${computerSelection} (Computer)`;
                    resultNum = 2;
                }
                break;
            case "paper":
                if(computer == "scissor"){
                    result = `You lose! ${playerSelection} (You) loses against ${computerSelection} (Computer)`;
                    resultNum = 0;
                }
                else if(computer == "rock"){
                    result = `You win! ${playerSelection} (You) beats ${computerSelection} (Computer)`;
                    resultNum = 1;
                }
                else if(computer == "paper"){
                    result = `${playerSelection} (You) ties ${computerSelection} (Computer)`;
                    resultNum = 2;
                }
                break;
            case "scissor":
                if(computer == "rock"){
                    result = `You lose! ${playerSelection} (You) loses against ${computerSelection} (Computer)`;
                    resultNum = 0;
                }
                else if(computer == "paper"){
                    result = `You win! ${playerSelection} (You) beats ${computerSelection} (Computer)`;
                    resultNum = 1;
                }
                else if(computer == "scissor"){
                    result = `${playerSelection} (You) ties ${computerSelection} (Computer)`;
                    resultNum = 2;
                }
                break;
        }
    }

    let response = [result, resultNum];

    return response
}

let i = 0;
let playerScore = 0;
let PCScore = 0;

for(i ; i < 5 ; i++){
    let getUserChoice = prompt("Enter your choice between Rock, Paper or Scissor: ");
    let roundResult = gameRound(getUserChoice, getComputerChoice());

    console.log(`Round ${i+1}: ${roundResult[0]}`);

    if(roundResult[1] == 0){
        PCScore = PCScore + 1;
    }
    else if(roundResult[1] == 2 || roundResult[1] == 3){
        i = i - 1;
        console.log("Let's repeat the round");
    }
    else if(roundResult[1] == 1){
        playerScore = playerScore + 1;
    }
}

console.log(`Final scores are: Player ${playerScore} and PC ${PCScore}`);