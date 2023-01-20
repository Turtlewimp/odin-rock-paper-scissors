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

console.log(getComputerChoice());