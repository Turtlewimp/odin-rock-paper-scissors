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

function playRound(playerSelection, computerSelection) {

    let playCombo = playerSelection.concat(computerSelection);
    //tie situation
    if (playerSelection == computerSelection) {
        return "tie";
    }
    else if (playCombo == "rockscissors" || playCombo == "paperrock" || playCombo == "scissorsrock") {
        return "win";
    }
    else {
        return "lose";
    }
    //Compare rps values
    //determine winners
    //conclusion = `${winnerSelection} beats ${loserSelection}`

    //if player win
    //"You Win! " + conclusion
    //if player lose
    //"You Lose! " + conclusion
}

console.log(playRound("rock", "rock"));
console.log(playRound("paper", "rock"));
console.log(playRound("scissors", "paper"));

//normalize cases for playerSelection