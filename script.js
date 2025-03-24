const Rock = document.getElementById("Rock");
const Paper = document.getElementById("paper");
const Scissors = document.getElementById("scissors");
const Microwave = document.getElementById("microwave");
const Pencil = document.getElementById("pencil");
const computerdisplay = document.getElementById("P1");
const playerDisplay = document.getElementById("P2");
const result = document.getElementById("winner");
let playerPick = 0;
let cpuPick = 0;


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

function Playgame(playerPick) {
    
}



function cpuChoice() {
    return Math.floor(Math.random() * 5)
}





// function checkScore(){
//     if (playerPick == 1){
//         alert("you did it")   
//     alert("You Did it!")
// }



// }

