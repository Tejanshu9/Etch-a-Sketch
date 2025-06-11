const container = document.querySelector(".container");
const btn = document.querySelector(".size-btn");




btn.addEventListener('click', () => {
    const gridSize = prompt("Enter the size of grid: ");

    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
        alert("Please enter a number between 1 and 100");
        return;
    }

    createGrid(gridSize);
});

function getRandomColor(e) {
    const r =Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


function createGrid(gridSize) {

     container.textContent = "";
     const containerSize = 960;

    for(let i = 0; i < (gridSize * gridSize); i++) {
        const square = document.createElement("div");
        square.classList.add('grid-square');


        const squareSize = containerSize / gridSize;

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseenter', (e) => {
            if (!square.style.backgroundColor) 
                square.style.backgroundColor = getRandomColor(e);
    });

    container.appendChild(square);
    }

}
