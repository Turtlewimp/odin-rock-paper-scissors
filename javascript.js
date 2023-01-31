//return random rps choice
function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            break;
    }
}

//function that 
//compares player's choice and computerChoice 
//to determine outcome of a round of rock paper scissors
function playRound(playerSelection, computerSelection) {

    let playCombo = playerSelection.concat(computerSelection);

    //compare for play outcome
    if (playerSelection == computerSelection) {
        return "tie";
    }
    else if (playCombo == "rockscissors" || playCombo == "paperrock" || playCombo == "scissorsrock") {
        return "win";
    }
    else {
        return "lose";
    }
}

/*
//play 5 rounds of rock paper scissors
function game() {
    
    //declare variables
    let playerChoice;
    let computerChoice;
    let playOutcome;
    let playerPoints = 0;
    let computerPoints = 0;

    //print initial scores
    console.log(`The score is ${playerPoints} to ${computerPoints}.`);

    //play 5 rounds
    for (let i = 1; i<6; i++) {
        //declare round
        console.log("Round " + i);
        
        
        //playerChoice = prompt().toLowerCase();
           

        //print out player choice
        console.log("You: " + playerChoice);

        //get and print computer choice
        computerChoice = getComputerChoice();
        console.log("Opponent: " + computerChoice);

        switch (playOutcome = playRound(playerChoice, computerChoice)) {
            case "tie":
                console.log(`${playerChoice} ties ${computerChoice}`);
                break;
            case "win":
                playerPoints++;
                console.log(`${playerChoice} beats ${computerChoice}`);
                break;
            case "lose":
                computerPoints++;
                console.log(`${computerChoice} beats ${playerChoice}`);
                break;
            default:
                break;
        }

    }

    //print final score
    console.log(`The final score is ${playerPoints} to ${computerPoints}.`)
    //declare winner
    if (playerPoints == computerPoints) {
        console.log("No one wins; No one loses.");
    }
    else if (playerPoints > computerPoints) {
        console.log("You win the game!");
    }
    else {
        console.log("You lose the game!");
    }
}
*/

//game();

//if game ends, prompt user to play again

