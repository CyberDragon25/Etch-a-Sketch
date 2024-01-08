const grid = document.querySelector('.grid');
const size = 16;
grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

document.addEventListener('DOMContentLoaded', function () {
  const containerDiv = document.querySelector('.grid');
  const clearButton = document.getElementById('clear');
  const colorInput = document.getElementById('color');
  const sizeInput = document.getElementById('size');
  const randomButton = document.getElementById('random');
  const applyButton = document.getElementById('apply');

  let currentColor = colorInput.value; // Get the default color

  // Function to create the grid
  function createGrid(size) {
    containerDiv.innerHTML = ''; // Clear existing grid
    containerDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    containerDiv.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
      const squareDiv = document.createElement('div');
      squareDiv.classList.add('grid-square');
      containerDiv.appendChild(squareDiv);
    }
  }

  // Event listener for the "Clear" button
  clearButton.addEventListener('click', function () {
    document.querySelectorAll('.grid-square').forEach(square => {
      square.style.backgroundColor = '';
    });
  });

  // Event listener for the "Random Color" button
  randomButton.addEventListener('click', function () {
    currentColor = getRandomColor();
  });

  // Event listener for the "Apply Changes" button
  applyButton.addEventListener('click', function () {
    const gridSize = parseInt(sizeInput.value, 10);
    createGrid(gridSize);
  });

  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Initial grid creation
  createGrid(parseInt(sizeInput.value, 10));

  // Event listener for color input change
  colorInput.addEventListener('input', function () {
    currentColor = colorInput.value;
  });

  // Event listener for changing the color of the grid squares
  containerDiv.addEventListener('mouseover', function (event) {
    if (event.target.classList.contains('grid-square')) {
      event.target.style.backgroundColor = currentColor;
    }
  });
});


createGrid(16); 