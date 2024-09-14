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