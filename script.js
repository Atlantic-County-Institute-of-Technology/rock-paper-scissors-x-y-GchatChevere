const choices = ["rock","paper","scissors","printer","pencil"]
const playerDisplay = document.getElementById("P1");
const computerDisplay = document.getElementById("P2");
const resultDisplay = document.getElementById("winner");
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
               result = (cpuChoice === "scissors") ? "You win!" : "You Lose!"
                break;
            case "paper":
               result = (cpuChoice === "rock") ? "You win!" : "You Lose!"
                break;
            case "scissors":
                result = (cpuChoice === "paper") ? "You win!" : "You Lose!"
                break;
            case "printer":
                result = (cpuChoice === "paper"|| cpuChoice === "pencil") ? "You win!" : "You Lose!"
                break;
            case "pencil":
                result = (cpuChoice === "paper"|| cpuChoice === "scissors") ? "You win!" : "You Lose!"
                break;

        }
    }



    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `computer: ${cpuChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greentext","redText")

    switch(result){
        case "You Win!":
            resultDisplay.classList.add("greenText");
            break;
            
        case "You Lose!":
            resultDisplay.classList.add("redText");
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

