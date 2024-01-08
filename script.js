const grid = document.querySelector('.grid');
const size = 16;
grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;


function createGrid(size) {
    // making the grid empty
    grid.innerHTML = '';
    // setting the grid size
     const squareSize = (grid.clientWidth - 2) / size; 
    // creating the grid
    for (let i = 0; i < size * size; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('grid-square');
        squareDiv.style.width = `${squareSize}px`;
        squareDiv.style.height = `${squareSize}px`;

        grid.appendChild(squareDiv);
    }
}

createGrid(16);