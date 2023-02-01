function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            break;
    }
}

let playerPointCounter = 0;
let computerPointCounter = 0;
let clickCounter = 0;

function playRound(playerSelection, computerSelection) {
    const playerPoints = document.querySelector('#playerPoints');
    const computerPoints = document.querySelector('#computerPoints');
    const round = document.querySelector('#round');
    const commentary = document.querySelector('#commentary');

    //update round display
    round.textContent = `Round: ${++clickCounter} of 5`;

    //reset after 5 rounds played
    if (clickCounter%6 === 0) {
        commentary.textContent = `That's game! The final score was ${playerPointCounter} to ${computerPointCounter}. Click the buttons to play again.`;
        playerPoints.textContent = `Your Points: ${playerPointCounter = 0}`;
        computerPoints.textContent = `Computer's Points: ${computerPointCounter = 0}`;
        round.textContent = `Round: ${clickCounter = 0} of 5`;
        return;
    } 

    //compare for play outcome
    let playCombo = playerSelection.concat(computerSelection);
    if (playerSelection === computerSelection) {
        commentary.textContent = `${playerSelection} ties ${computerSelection}`;
    }
    else if (playCombo === "RockScissors" || playCombo === "PaperRock" || playCombo === "ScissorsPaper") {
        playerPoints.textContent = `Your Points: ${++playerPointCounter}`;
        commentary.textContent = `${playerSelection} beats ${computerSelection}`;
    }
    else if (playCombo === "RockPaper" || playCombo === "PaperScissors" || playCombo === "ScissorsRock"){
        computerPoints.textContent = `Computer's Points: ${++computerPointCounter}`;
        commentary.textContent = `${computerSelection} beats ${playerSelection}`;
    } 
    else {
        return console.log("ERROR in playRound()");
    }
}
