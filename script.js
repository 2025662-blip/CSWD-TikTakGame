
// 1. Setup our starting variables
// let is a keyword used to declare a variable.
let currentPlayer = "X"; // Game starts with X
let gameActive = true;   // This stops the game if someone wins

function startGame(){
    let nameX = document.getElementById("playerX").value;
    let nameY = document.getElementById("playerY").value;
    let grid = document.getElementById("gridGame");

    if(nameX && nameY){
        grid.style.visibility = "visible";
        //console.log() is a private megaphone that your code uses to talk to you behind the scenes. 
        //It doesn’t change anything on the actual website that a user sees; it only sends messages to the Developer Tools in your browser.
        console.log("Game started");
    }else{
        console.log("Please enter both player names");
    }
}

// 2. This function runs every time a cell is clicked

function cellClick(event){
    //const is to declared variables too but const can't change
    const clickedCell = event.target; // This is the specific <td> that was clicked

    // Only allow a move if the cell is empty and the game is active
    if((clickedCell.innerText == "") && gameActive){
        clickedCell.innerText = currentPlayer; // Put 'X' or 'O' in the box
        
        // After placing a symbol, we would check for a win here!
        
        // Switch players: if it was X, make it O. Otherwise, make it X.
        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }
    }
}

// 3. Tell JavaScript to listen to EVERY cell
//document.querySelectorAll(".cell"); as a search party that goes out into the HTML to find every single element 
//that shares the same class name.
//In your code, you have multiple table cells (<td>) that all use class="cell". 
//This line is how JavaScript grabs all of them at once so you don't have to talk to each box individually.
const allCells = document.querySelectorAll(".cell");

// Loop through every cell and tell them to run 'handleCellClick' only when clicked
allCells.forEach(cell => {
    cell.addEventListener("click", cellClick);
});

//4. Start game
// Tell them to tun 'startGame' only when clicked
document.getElementById("start-button").addEventListener("click", startGame);

//5.End of game

function endGame(){
    if(allCells.innerText != ""){
        console.log("Its due");
    }

}

//6.Restart game
document.getElementById("restart-button").addEventListener("click", startGame);