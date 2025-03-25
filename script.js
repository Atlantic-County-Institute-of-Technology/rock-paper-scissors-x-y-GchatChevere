const Rock = document.getElementById("Rock");
const Paper = document.getElementById("paper");
const Scissors = document.getElementById("scissors");
const Microwave = document.getElementById("microwave");
const Pencil = document.getElementById("pencil");
const choices = ["rock","paper","scissors","microwave","pencil"]
const playerDisplay = document.getElementById("P1");
const cpuDisplay = document.getElementById("P2");
const result = document.getElementById("winner");
let playerChoice = 0;
let cpuChoice = 0;


// TODO: EventListeners for player choice
// TODO: Function for cpu choice


Rock.addEventListener("click", () => {
    Playgame(1);
});
Paper.addEventListener("click", () => {
    Playgame(2);
});
Scissors.addEventListener("click", () => {
    Playgame(3);
});
Microwave.addEventListener("click", () => {
    Playgame(4);
});
Pencil.addEventListener("click", () => {
    Playgame(5);
});

function Playgame(playerChoice) {
    const cpuChoice = choices[Math.floor(Math.random() * 5 )]
    if (playerChoice === cpuChoice){
        result = "ITS A TIE";
    }
    else{
        switch(playerChoice){
            case "Rock":
                (cpuChoice === "Scissors") ? "You win!" : "You Lose"
                break;
            case "Paper":
                (cpuChoice === "Rock") ? "You win!" : "You Lose"
                break;
            case "Scissors":
                (cpuChoice === "Paper") ? "You win!" : "You Lose"
                break;
            
        }
    }



    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    cpuDisplay.textContent = `COMPUTER: ${cpuChoice}`;
    result.textContent = result;




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

