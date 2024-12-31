function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled; // Include max in range
}

function getComputerChoice() {
    const randomInt = getRandomInt(1, 3); // Generate a random number between 1 and 3
    if (randomInt === 1) {
        return 'rock';
    }
    if (randomInt === 2) {
        return 'paper';
    }
    if (randomInt === 3) {
        return 'scissors';
    }
}

function getHumanChoice() {
    const validChoices = ['rock', 'paper', 'scissors'];
    let userInput = '';

    while (!validChoices.includes(userInput)) {
        userInput = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
        if (!validChoices.includes(userInput)) {
            alert("Invalid choice. Please choose rock, paper, or scissors.");
        }
    }

    return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }

    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log("Player won this round!");
        humanScore++;
    } else {
        console.log("Computer won this round!");
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("Player choose: " + humanSelection)
console.log("Computer choose: " + computerSelection)
playRound(humanSelection, computerSelection);