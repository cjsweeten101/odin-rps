let humanScore = 0;
let computerScore = 0;
let currentHumanChoice = '';
let currentComputerChoice = '';
const div = document.querySelector("div");
const score = document.querySelector("#score");
const currentChoices = document.querySelector("#current-choices")

const onButtonClick = function(e) {
    switch (e.target.id) {
        case 'rock':
            currentHumanChoice = 'rock';
            break;
        case 'paper':
            currentHumanChoice = 'paper';
            break;
        case 'scissors':
            currentHumanChoice = 'scissors';
            break;
    }
    playGame();
}

div.addEventListener("click", onButtonClick);

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


/*function getHumanChoice () {
    let choices = ["rock", "paper", "scissors"];
    let choice = prompt("Enter rock paper or scissors!").toLowerCase();
    while (!choices.includes(choice)){
        choice = prompt("Sorry not recognized, please enter rock paper or scissors").toLowerCase();
    }
    return choice;
}
*/

function playRound() {
    //let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    currentComputerChoice = computerChoice;

    if (currentHumanChoice == "rock") {
        if (computerChoice == "scissors" ) {
            humanScore += 1;
            console.log(`You picked ${currentHumanChoice} the computer picked ${computerChoice}`);
            console.log("You win the round!");
            return 
        } else if (computerChoice == "paper") {
            computerScore += 1;
            console.log(`You picked ${currentHumanChoice} the computer picked ${computerChoice}`);
            console.log("Computer wins the round!");
            return;
        } else if (computerChoice == "rock") {
            console.log(`You picked ${currentHumanChoice} the computer picked ${computerChoice}`);
            console.log("A tie!");
        }
    } else if (currentHumanChoice == "scissors") {
        if (computerChoice == "paper" ) {
            humanScore += 1;
            console.log(`You picked ${currentHumanChoice} the computer picked ${computerChoice}`);
            console.log("You win the round!");
            return 
        } else if (computerChoice == "rock") {
            computerScore += 1;
            console.log(`You picked ${currentHumanChoice} the computer picked ${computerChoice}`);
            console.log("Computer wins the round!");
            return;
        } else if (computerChoice == "scissors") {
            console.log(`You picked ${currentHumanChoice} the computer picked ${computerChoice}`);
            console.log("A tie!");
        }
    } else if (currentHumanChoice == "paper") {
        if (computerChoice == "rock" ) {
            humanScore += 1;
            console.log(`You picked ${currentHumanChoice} the computer picked ${computerChoice}`);
            console.log("You win the round!");
            return 
        } else if (computerChoice == "scissors") {
            computerScore += 1;
            console.log(`You picked ${currentHumanChoice} the computer picked ${computerChoice}`);
            console.log("Computer wins the round!");
            return;
        } else if (computerChoice == "paper") {
            console.log(`You picked ${currentHumanChoice} the computer picked ${computerChoice}`);
            console.log("A tie!");
        }
    }
}

function playGame() {
    let roundCount = 0;
    //while (roundCount < 5) {
    playRound()
    console.log(`Score:\nYou: ${humanScore} Computer: ${computerScore}`);
    score.textContent = `Human: ${humanScore}  Computer: ${computerScore}`
    currentChoices.textContent = `You picked ${currentHumanChoice} the computer picked ${currentComputerChoice}`;
    roundCount += 1;
    console.log("hello")
    //}
    /*
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("The computer wins the game!");
    } else {
        console.log("No winner!  A tie!");
    }
    */
}

//playGame();