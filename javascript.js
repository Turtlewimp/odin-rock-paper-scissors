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

function playRound(playerSelection, computerSelection) {
  
    const div = document.querySelector('#displayBoard');
    div.textContent = playerSelection + computerSelection;

    //console.log(playerSelection);
    //console.log(computerSelection);
    let playCombo = playerSelection.concat(computerSelection);

    //compare for play outcome
    if (playerSelection == computerSelection) {
        return console.log("tie");
    }
    else if (playCombo == "rockscissors" || playCombo == "paperrock" || playCombo == "scissorsrock") {
        return console.log("win");
    }
    else {
        return console.log("lose");
    }

}

//when playRound is called
//what triggers playRound? when a button is clicked
//when button is clicked
//playRound is called and takes in keyCode value of button for the playerSelection

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

//if game ends, prompt user to play again

