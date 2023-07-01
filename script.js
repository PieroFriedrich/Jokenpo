function game() {
    user = 0;
    computer = 0;
    for (i = 0; i < 5; i++) {
        result = playResults();
        switch (result) {
            case 1:
                user++;
                break;
            case 2:
                pc++;
                break;
        }
    }
    console.log("End of the 5 matches");
    console.log("Player " + user + "x" + computer + " PC.");
}

function playResults() {
    player = getPlayerChoice();
    pc = getComputerChoice();
    result = play(player, pc);
    return result;
}

function getPlayerChoice() {
    userAnswer = prompt("Choose: Rock, Scissors, or Paper").toLowerCase();
    capitalizedAnswer = userAnswer.charAt(0).toUpperCase() + userAnswer.substring(1,);
    return capitalizedAnswer;
}

function getComputerChoice() {
    pcNum = Math.round(Math.random() * 3);
    switch (pcNum) {
        case 0:
            return "Rock";
        case 1:
            return "Scissors";
        case 2:
            return "Paper";
    }
}

function play(playerSelection, computerSelection) {
    
    if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            console.log("The PC played Scissors");
            console.log("You win");
            return 1;
        } else if (computerSelection == "Paper") {
            console.log("The PC played Paper");
            console.log("You lose");
            return 2;
        } else {
            console.log("The PC played Rock");
            console.log("Draw");
            return 0;
        }
    }
    if (playerSelection == "Scissors") {
        if (computerSelection == "Paper") {
            console.log("The PC played Paper");
            console.log("You win");
            return 1;
        } else if (computerSelection == "Rock") {
            console.log("The PC played Rock");
            console.log("You lose");
            return 2;
        } else {
            console.log("The PC played Scissors");
            console.log("Draw");
            return 0;
        }
    }
    if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            console.log("The PC played Rock");
            console.log("You win");
            return 1;
        } else if (computerSelection == "Scissors") {
            console.log("The PC played Scissors");
            console.log("You lose");
            return 2;
        } else {
            console.log("The PC played Paper");
            console.log("Draw");
            return 0;
        }
    }
}