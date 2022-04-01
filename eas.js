let resetBtn = document.getElementById('reset')
  resetBtn.addEventListener('click', resetGrid)
let numRows = prompt("Please enter how many rows you want (1 to 100)")
let gridSize = numRows * numRows

function createGrid(){
  grid.style.gridTemplateColumns = `repeat(${numRows}, 1fr)`;

  for (let i = 0; i < gridSize; i++){
    let grid = document.getElementById('grid')
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
    tile.style.backgroundColor = ''
  }
}

createGrid();