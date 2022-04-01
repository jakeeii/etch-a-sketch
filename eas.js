// To add a dynamic grid later on. Default is 16*16 grid.
// grid.style.gridTemplateColumns = `repeat(${numSqr}, 1fr)`;

function createGrid(){

  for (let i = 0; i < 16 * 16; i++){
    let grid = document.getElementById('grid')
    let newDivSqr = document.createElement('div')
    grid.appendChild(newDivSqr)
  }

}

createGrid();