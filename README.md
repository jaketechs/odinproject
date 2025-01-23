# Rock Paper Scissors Game

This is a simple implementation of the classic **Rock, Paper, Scissors** game using JavaScript. The program allows a human player to compete against the computer in multiple rounds.

## How It Works
- The computer randomly selects either Rock, Paper, or Scissors.
- The player inputs their choice through a prompt.
- The game determines the winner of each round based on the following rules:
  - **Rock beats Scissors**
  - **Paper beats Rock**
  - **Scissors beat Paper**
  - If both choices are the same, the round is a draw.
- The game keeps track of scores for both the human player and the computer.

## Features
- Input validation to ensure the player selects a valid choice ("Rock", "Paper", or "Scissors").
- Case-insensitive input handling (e.g., "rock", "Rock", and "ROCK" are treated the same).
- Multiple rounds can be played, and scores are updated accordingly.

## How to Run
1. Copy the JavaScript code into an environment that supports prompt dialogs, such as a browser console.
2. Execute the program to start the game.
3. Follow the prompts to play against the computer.

## Example Output
```plaintext
choose your choice (Rock, Paper, Scissors): Rock
computer chooses Scissors
You win this round!
choose your choice (Rock, Paper, Scissors): Paper
computer chooses Rock
You win this round!
choose your choice (Rock, Paper, Scissors): Scissors
computer chooses Paper
You win this round!
Final Score:
Human: 3
Computer: 0
```

## Notes
- Ensure the environment allows the use of `prompt()` to capture user input.
- The program uses `console.log()` to display messages and results.
- The game does not have persistent data storage; scores reset when the program is restarted.
