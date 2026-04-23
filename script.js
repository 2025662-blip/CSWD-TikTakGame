//single source of truth
const maxPlayers = 2;

let currentPlayer = 0;
const symbols = ["X", "O"];

const cells = document.getElementById("td");

for(let cellNum = 0; cellNum < cells.length; cellNum++){
    cells[cellNum].addEventListener("click", (event) => {
        const currentCell = event.target;
        if(!currentCell.innerText) return;
        currentCell.innerText = symbols[currentPlayer];
        checkGameEnd();
        currentPlayer++;
        currentPlayer = currentPlayer % maxPlayers;
    });
}