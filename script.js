let humanScore = 0;
let computerScore = 0;


function getComputerChoice () {
    let num = Math.floor(Math.random() * 3);
    let choice = ""
    switch (num) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    return choice;
}

function getHumanChoice () {
    let choices = ["rock", "paper", "scissors"];
    let choice = prompt("Enter rock paper or scissors!").toLowerCase();
    while (!choices.includes(choice)){
        choice = prompt("Sorry not recognized, please enter rock paper or scissors").toLowerCase();
    }
    return choice;
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice == "rock") {
        if (computerChoice == "scissors" ) {
            humanScore += 1;
            console.log(`You picked ${humanChoice} the computer picked ${computerChoice}`)
            console.log("You win the round!")
            return 
        } else if (computerChoice == "paper") {
            computerScore += 1;
            console.log(`You picked ${humanChoice} the computer picked ${computerChoice}`)
            console.log("Computer wins the round!")
            return;
        } else if (computerChoice == "rock") {
            console.log(`You picked ${humanChoice} the computer picked ${computerChoice}`)
            console.log("A tie!")
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "paper" ) {
            humanScore += 1;
            console.log(`You picked ${humanChoice} the computer picked ${computerChoice}`)
            console.log("You win the round!")
            return 
        } else if (computerChoice == "rock") {
            computerScore += 1;
            console.log(`You picked ${humanChoice} the computer picked ${computerChoice}`)
            console.log("Computer wins the round!")
            return;
        } else if (computerChoice == "scissors") {
            console.log(`You picked ${humanChoice} the computer picked ${computerChoice}`)
            console.log("A tie!")
        }
    } else if (humanChoice == "rock") {
        if (computerChoice == "scissors" ) {
            humanScore += 1;
            console.log(`You picked ${humanChoice} the computer picked ${computerChoice}`)
            console.log("You win the round!")
            return 
        } else if (computerChoice == "paper") {
            computerScore += 1;
            console.log(`You picked ${humanChoice} the computer picked ${computerChoice}`)
            console.log("Computer wins the round!")
            return;
        } else if (computerChoice == "rock") {
            console.log(`You picked ${humanChoice} the computer picked ${computerChoice}`)
            console.log("A tie!")
        }
    }
}

playRound()