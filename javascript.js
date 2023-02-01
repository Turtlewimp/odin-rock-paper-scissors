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

//const div = document.querySelector('#displayBoard');
//div.textContent = playerSelection + computerSelection;


function playRound(playerSelection, computerSelection) {
    const playerPoints = document.querySelector('#playerPoints');
    const computerPoints = document.querySelector('#computerPoints');
    const round = document.querySelector('#round');
    const commentary = document.querySelector('#commentary');


    //update round display
    console.log("round");
    let playCombo = playerSelection.concat(computerSelection);

    //compare for play outcome
    if (playerSelection == computerSelection) {
        commentary.textContent = `${playerSelection} ties ${computerSelection}`;
        return console.log("tie");
    }
    else if (playCombo == "rockscissors" || playCombo == "paperrock" || playCombo == "scissorspaper") {
        //update playerPoints ++
        commentary.textContent = `${playerSelection} beats ${computerSelection}`;
        return console.log("win");
    }
    else if (playCombo == "rockpaper" || playCombo == "paperscissors" || playCombo == "scissorsrock"){
        //update computerPoints ++
        commentary.textContent = `${computerSelection} beats ${playerSelection}`;
        return console.log("lose");
    }
    else {
        return console.log("ERROR");
    }



}

function displayUpdate() {
    //checks div#round 
    //if round changes from 4 to 5
    //update playbyplay with final score and game
    //"you win" "you lose" "it's a tie"
    //button labels all change to reset
    //"click the button again to reset"

    //if round changes from 5 to 6 then
    //immediately reset all stats
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

//if game ends, prompt user to play again

