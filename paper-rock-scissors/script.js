function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "Paper";
    } else if (randomNumber === 1) {
        return "Rock";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose your choice (Rock, Paper, Scissors):").trim();
    let formattedChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
    return formattedChoice === "Paper" || formattedChoice === "Rock" || formattedChoice === "Scissors"
        ? formattedChoice
        : "invalid choice";
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const rounds = 5; // Set a specific number of rounds

    for (let round = 1; round <= rounds; round++) {
        console.log(`Round ${round}:`);
        let humanSelection = getHumanChoice();
        
        if (humanSelection === "invalid choice") {
            console.log("Invalid input. Skipping this round.");
            continue; // Skip the round if input is invalid
        }

        let computerSelection = getComputerChoice();
        console.log(`Computer chooses: ${computerSelection}`);
        console.log(`You choose: ${humanSelection}`);

        let roundResult = playRound(humanSelection, computerSelection);

        if (roundResult === "human") {
            humanScore++;
        } else if (roundResult === "computer") {
            computerScore++;
        }

        console.log(`Scores: You - ${humanScore}, Computer - ${computerScore}`);
    }

    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie!");
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
        return "draw";
    }

    if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        console.log("You win this round!");
        return "human";
    } else {
        console.log("You lose this round!");
        return "computer";
    }
}

// Start the game
playGame();
