// rps with ui 

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const win = "win";
const loss = "loss";
const tie = "tie";

let playerWins = 0;
let computerWins = 0;
let ties = 0;

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

    const results = document.querySelector(".results");
    const par = document.createElement("p");
    par.textContent = "Result: " + returnMsg;
    results.appendChild(par);


    switch (score) {
        case win: playerWins++;
            break;
        case loss: computerWins++;
            break;
        case tie: ties++;
            break;
        default: console.log("Error: score value not valid.");
    }

    if (playerWins >= 5 || computerWins >= 5) {

        const p01 = document.createElement("p");
        p01.textContent = "Game Over.";
        results.appendChild(p01);

        const p02 = document.createElement("p");
        p02.textContent = "playerWins: " + playerWins;
        results.appendChild(p02);
        const p03 = document.createElement("p");
        p03.textContent = "computerWins: " + computerWins;
        results.appendChild(p03);
        const p04 = document.createElement("p");
        p04.textContent = "ties: " + ties;
        results.appendChild(p04);

    }
}


/* main */

const buttons = document.querySelectorAll(".rps-button");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerSelection = computerPlay();
        let score = playRound(playerSelection, computerSelection);
    })
});