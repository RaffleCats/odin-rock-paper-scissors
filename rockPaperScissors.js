// Step 1: Write the logic to get the computer choice
// Create a function that produces a random integer value up to a chosen integer
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Create a function that randomly returns "rock", "paper", or "scissors"
function getComputerChoice() {
    switch (getRandomInt(3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Create a function that compares 2 string inputs and decides a winner according to the rules of Rock Paper Scissors
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "tie";
    } else if (userChoice === "rock" && computerChoice === "paper") {
        return "computer";
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        return "user";
    } else if (userChoice === "paper" && computerChoice === "rock") {
        return "user";
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        return "computer";
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        return "computer";
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        return "user";
    } 
}

function playGame() {
    // Create 2 variables to store the user and computer's scores
    // Initialize them with a value of 0
    let userScore = 0;
    let computerScore = 0;

    const score = document.querySelector(".score");
    const results = document.querySelector(".results");

    // Create a running score
    const runningScoreDiv = document.createElement("div");
    runningScoreDiv.textContent =
    `Running Score: [User: ${userScore}] [Computer: ${computerScore}]`;
    score.appendChild(runningScoreDiv);

    // Create a function that updates the running score
    function updateRunningScore() {
        runningScoreDiv.textContent =
        `Running Score: [User: ${userScore}] [Computer: ${computerScore}]`;
        score.appendChild(runningScoreDiv);
    }

    // Create a function that increments either the score of the human or computer
    // Include one parameter that decides which score to increment
    function incrementScore(winner) {
        switch (winner) {
            case "user":
                userScore++;
                break;
            case "computer":
                computerScore++;
        }
    }

    function displayWinner(winner) {
        alert(`${winner} has won the game!`);
    }

    function resetGame() {
        let resultsChildren = results.querySelectorAll("div");
        resultsChildren.forEach((child) => {child.remove()});
            
        userScore = 0;
        computerScore = 0;
        updateRunningScore();
    }

    // Create a function that checks for a win condition
    // Win condition: User or COmputer reaches a score of 5
    function checkForWin() {
        if (userScore >= 5) {
            displayWinner("user");
            resetGame();
        } else if (computerScore >= 5) {
            displayWinner("computer");
            resetGame();
        }
    }

    // Create a function to play one round of Rock Paper Scissors
    function playRound(userChoice) {
        let computerChoice = getComputerChoice();
        let winner = determineWinner(userChoice, computerChoice);
        incrementScore(winner);
        updateRunningScore();
        
        // Display Choices
        let choiceDiv = document.createElement("div");
        choiceDiv.textContent = 
        `User: ${userChoice} Computer: ${computerChoice}`;
        results.appendChild(choiceDiv);
        
        // Display Winner
        let winnerDiv = document.createElement("div");
        switch (winner) {
            case "tie":
                winnerDiv.textContent = "Tie!";
            default:
                winnerDiv.textContent = `${winner} wins!`;
        }
        results.appendChild(winnerDiv);

        checkForWin();
    }

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            console.log(button.className);
            playRound(button.className);
        })
    });
}

playGame();