// To add a dynamic grid later on. Default is 16*16 grid.
// grid.style.gridTemplateColumns = `repeat(${numSqr}, 1fr)`;

function createGrid(){

  for (let i = 0; i < 16 * 16; i++){
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

createGrid();