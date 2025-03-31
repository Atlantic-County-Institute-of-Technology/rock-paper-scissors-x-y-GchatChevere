const choices = ["rock","paper","scissors","water","notebook"];
const playerDisplay = document.getElementById("P1");
const computerDisplay = document.getElementById("P2");
const resultDisplay = document.getElementById("winner");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const NewGame = document.getElementById("NewGame")
let playerScore = 0;
let computerScore = 0;


NewGame.addEventListener("click", () => {
    clear()
})

function clear(){
    playerScoreDisplay.textContent = "0";
    computerScoreDisplay.textContent = "0";
    playerDisplay.textContent = ""; 
    computerDisplay.textContent = ""; 
    resultDisplay.textContent = "";
 }

function playgame(playerChoice) {
    const cpuChoice = choices[Math.floor(Math.random() * 5 )]
    let result = "";

    if (playerChoice === cpuChoice){
        result = "ITS A TIE";
    }
    else{
        switch(playerChoice){
            case "rock":
               result = (cpuChoice === "scissors" || cpuChoice === "notebook") ? "You Win!" : "You Lose!"
                break;
            case "paper":
               result = (cpuChoice === "rock" || cpuChoice === "water") ? "You Win!" : "You Lose!"
                break;
            case "scissors":
                result = (cpuChoice === "paper" || cpuChoice === "notebook") ? "You Win!" : "You Lose!"
                break;
            case "water":
                result = (cpuChoice === "rock"|| cpuChoice === "scissors") ? "You Win!" : "You Lose!"
                break;
            case "notebook":
                result = (cpuChoice === "paper"|| cpuChoice === "water") ? "You Win!" : "You Lose!"
                break;

        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `computer: ${cpuChoice}`;
    resultDisplay.textContent = result;


    switch(result){
        case "You Win!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You Lose!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

}