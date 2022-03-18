const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    return fromNumToName(num);
}

function fromNumToName(num) {
    let name = "";
    if (num === 0) {
        name = rock;
    } else if (num === 1) {
        name = paper
    } else if (num === 2) {
        name = scissors;
    } else {
        throw new Error("value not ammitted");
    }
    return name;
}

function gameRound(playerSelection = "", computerSelection = "") {
    let returnMsg = "";

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            returnMsg = "Spare " + rock + " spares with " + rock;
        } else if (computerSelection === "paper") {
            returnMsg = "You Lose! " + paper + " beats " + rock;
        } else if (computerSelection === "scissors") {
            returnMsg = "You Win! " + rock + " beats " + scissors;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            returnMsg = "You Win! " + paper + " beats " + rock;
        } else if (computerSelection === "paper") {
            returnMsg = "Spare " + paper + " spares with " + paper;
        } else if (computerSelection === "scissors") {
            returnMsg = "You Lose! " + scissors + " beats " + paper;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            returnMsg = "You Lose! " + rock + " beats " + scissors;
        } else if (computerSelection === "paper") {
            returnMsg = "You Win! " + scissors + " beats " + paper;
        } else if (computerSelection === "scissors") {
            returnMsg = "Spare " + scissors + " spares with " + scissors;
        }
    }
    return returnMsg;
}


/* main */
let playerPlay = prompt("Insert your selection(rock/paper/scissors)");
console.log("You played: " + playerPlay);
let compPlay = computerPlay();
console.log("Computer played: " + compPlay);
let matchResult = gameRound(playerPlay, compPlay);
console.log(matchResult);
