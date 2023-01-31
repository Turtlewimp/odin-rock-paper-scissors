//function that returns a random outcome from three options (rock, paper, scissors)
function getComputerChoice() {
    //generate random integer between 0 and 2
    //if random number is 0, then rock
    //if random number is 1, then paper
    //if random number is 2, then scissors 

    //if-else statement version
    /*
    //let randomInt = Math.floor(Math.random() * 3);
    if (randomInt == 0) {
        return "rock";
    }
    else if (randomInt == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
    */

    //switch statement version
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

//function that compares player's choice and computerChoice to determine outcome of a round of rock paper scissors
function playRound(playerSelection, computerSelection) {

    let playCombo = playerSelection.concat(computerSelection);

    //compare for play outcome
    //tie situation
    if (playerSelection == computerSelection) {
        return "tie";
    }
    //test for winning combo
    else if (playCombo == "rockscissors" || playCombo == "paperrock" || playCombo == "scissorsrock") {
        return "win";
    }
    //assume losing combo
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
        
        //get and validate player choice
        let validate = false;
        while (validate == false) {
            playerChoice = prompt().toLowerCase();
            if(playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
                validate = true;
            }
            else {
                alert("Invalid input. Try again.");
            }    
        }

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

