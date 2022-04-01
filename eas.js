let resetBtn = document.getElementById('reset')
  resetBtn.addEventListener('click', resetGrid)
let grid = document.getElementById('grid')
let numRows = validateInput(prompt("Please enter how many rows you want (1 to 100)"))
let gridSize = numRows * numRows

function createGrid(){
  grid.style.gridTemplateColumns = `repeat(${numRows}, 1fr)`;
  for (let i = 0; i < gridSize; i++){
    let newDivSqr = document.createElement('div')
    newDivSqr.id = "tile" + i
    grid.appendChild(newDivSqr)
    let tile = document.getElementById(newDivSqr.id)
    tile.addEventListener('mouseenter', e => {
      tile.style.backgroundColor = 'black'
    })
  }
}

function resetGrid() {
  for (let i = 0; i < gridSize; i++){
    let tile = document.getElementById("tile" + i)
    grid.removeChild(tile);
  }
  numRows = validateInput(prompt("Please enter how many rows you want (1 to 100)"))
  gridSize = numRows * numRows
  createGrid()
}

// Only allows input between 1 and 100, otherwise will keep calling the function
function validateInput(input) {
  if (input <= 100 && input > 0) {
    return input
  } else {
    validateInput(prompt("Only enter a number between 1 and 100"))
  }
}

createGrid();