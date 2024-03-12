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

console.log("PC chose: " + getComputerChoice()); 