const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const win = "win";
const loss = "loss";
const tie = "tie";

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

function playRound(playerSelection = "", computerSelection = "") {
    let returnMsg = "";
    let score = "";

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            score = tie;
            returnMsg = "Spare " + rock + " spares with " + rock;
        } else if (computerSelection === "paper") {
            score = loss;
            returnMsg = "You Lose! " + paper + " beats " + rock;
        } else if (computerSelection === "scissors") {
            score = win;
            returnMsg = "You Win! " + rock + " beats " + scissors;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            score = win;
            returnMsg = "You Win! " + paper + " beats " + rock;
        } else if (computerSelection === "paper") {
            score = tie;
            returnMsg = "Spare " + paper + " spares with " + paper;
        } else if (computerSelection === "scissors") {
            score = loss;
            returnMsg = "You Lose! " + scissors + " beats " + paper;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            score = loss;
            returnMsg = "You Lose! " + rock + " beats " + scissors;
        } else if (computerSelection === "paper") {
            score = win;
            returnMsg = "You Win! " + scissors + " beats " + paper;
        } else if (computerSelection === "scissors") {
            score = tie;
            returnMsg = "Spare " + scissors + " spares with " + scissors;
        }
    }

    console.log(returnMsg);
    return score;
}

function game() {
    let wins = 0;
    let losses = 0;
    let ties = 0;

    for (let i = 0; i < 5; i++) {
        let playerPlay = prompt("Insert your selection(rock/paper/scissors)");
        console.log("You played: " + playerPlay);
        let compPlay = computerPlay();
        console.log("Computer played: " + compPlay);
        let score = playRound(playerPlay, compPlay);
        switch (score) {
            case win : wins++;
            break;
            
            case loss: losses++;
            break;
            
            case tie : tie++; 
            break;
            
            default: console.log("Error: score value not valid.");
         }
    }
    console.log("Game Over.");
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("Ties: " + ties);
}


/* main */
game();
