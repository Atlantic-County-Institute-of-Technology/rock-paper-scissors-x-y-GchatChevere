const choices = ["rock","paper","scissors","printer","pencil"];
const playerDisplay = document.getElementById("P1");
const computerDisplay = document.getElementById("P2");
const resultDisplay = document.getElementById("winner");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const NewGame = document.getElementById("NewGame")
let playerScore = 0;
let computerScore = 0;


// TODO: EventListeners for player choice
// TODO: Function for cpu choice



function playgame(playerChoice) {
    const cpuChoice = choices[Math.floor(Math.random() * 5 )]
    let result = "";

    if (playerChoice === cpuChoice){
        result = "ITS A TIE";
    }
    else{
        switch(playerChoice){
            case "rock":
               result = (cpuChoice === "scissors") ? "You Win!" : "You Lose!"
                break;
            case "paper":
               result = (cpuChoice === "rock") ? "You Win!" : "You Lose!"
                break;
            case "scissors":
                result = (cpuChoice === "paper") ? "You Win!" : "You Lose!"
                break;
            case "printer":
                result = (cpuChoice === "paper"|| cpuChoice === "pencil") ? "You Win!" : "You Lose!"
                break;
            case "pencil":
                result = (cpuChoice === "paper"|| cpuChoice === "scissors") ? "You Win!" : "You Lose!"
                break;

        }
    }

    function NewGame(){
       playerScore = 0;
       computerScore = 0;
       playerDisplay.textContent = 0; 
       computerDisplay.textContent = 0; 
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



/*function cpuChoice() {
    return Math.floor(Math.random() * 5)
}*/






// function checkScore(){
//     if (playerPick == 1){
//         alert("you did it")   
//     alert("You Did it!")
// }



// }

