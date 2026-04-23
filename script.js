
//single source of truth
const maxPlayers = 2;
const numCols = 3;
const numRows = 3;

let currentPlayer = 0;
const symbols = ["X", "O"];

const cells = document.getElementById("td");

for(let cellNum = 0; cellNum < cells.length; cellNum++){
    cells[cellNum].addEventListener("click", (event) => {
        const currentCell = event.target;
        if(currentCell.innerText) return;
        currentCell.innerText = symbols[currentPlayer];
        checkGameEnd();
        currentPlayer++;
        currentPlayer = currentPlayer % maxPlayers;
    });
}

function checkGameEnd(){
    //check rows
    //check diagonals
    //check for empty cells

    //0 1 2
    //3 4 5
    //6 7 8

    //row++ -> index+numCols

    for(let row= 0; row<numRows; row++){
        const currentRow = row * numCols;
        const firstSymbol = cells[rowStartIndex].innerText;
        let isSameSymbol = true;
        if(!firstSymbol) continue;

        for(let col=0; col<numCols; COL++){
            const currentSymbol = cells[rowStartIndex+col].innerText;
            isSameSymbol = isSameSymbol && (firstSymbol === currentSymbol);
        }

        if(isSameSymbol) alert('Player' ${firstSymbol} 'has won');
    }

}