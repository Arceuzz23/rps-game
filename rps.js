const prompt = require('prompt-sync')({sigint: true});

function getComputerChoice() {
    let randomNumber = Math.random();
    if(0<randomNumber<1/3)
        return "rock";
    else if(1/3<randomNumber<2/3)
        return "paper";
    else
    return "scissor";
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: ");
    return choice;
}

function winner(){
    let humanChoice= getHumanChoice();
    let computerChoice=getComputerChoice();
    console.log("Computer's choice: "+computerChoice);
    if(humanChoice==computerChoice)
        return "It's a tie!";
    else if(humanChoice=="rock" && computerChoice=="scissor")
        return "You win!";
    else if(humanChoice=="scissor" && computerChoice=="paper")
        return "You win!";
    else if(humanChoice=="paper" && computerChoice=="rock")
        return "You win!";
    else
        return "Computer wins!";
}

function playRound(){
    for (let index = 0; index < 5; index++) {
        let result = winner();
        console.log(result);
    }
}
playRound();
