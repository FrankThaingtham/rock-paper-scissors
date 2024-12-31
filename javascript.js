function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled; // Include max in range
    }

    function getComputerChoice() {
        const randomInt = getRandomInt(1, 3);
        if (randomInt === 1) return 'rock';
        if (randomInt === 2) return 'paper';
        return 'scissors';
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}`);
            return 'tie';
        }
        if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            console.log(`Player won this round! ${humanChoice} beats ${computerChoice}`);
            return 'human';
        } else {
            console.log(`Computer won this round! ${computerChoice} beats ${humanChoice}`);
            return 'computer';
        }
    }

    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}`);
        const humanChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
        const computerChoice = getComputerChoice();
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        const result = playRound(humanChoice, computerChoice);

        if (result === 'human') {
            humanScore++;
        } else if (result === 'computer') {
            computerScore++;
        }
        console.log(`Current Scores - Player: ${humanScore}, Computer: ${computerScore}`);
        console.log('-----------------------');
    }

    // Declare the winner
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Oh no! The computer won the game.");
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game
playGame();