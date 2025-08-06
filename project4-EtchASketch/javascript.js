console.log("Hello World");

function createGrid() {

    let userInput = document.getElementById("squares").value;
    console.log("UserInput = " + userInput);
    const etcha = document.querySelector('.interface');
    etcha.innerHTML = '';
    
    for(let i = 0; i < userInput; i++) {
        const newRow = document.createElement('div');
        newRow.className = 'gridRow';
            for(let x = 0; x < userInput; x++) {
                const newCell = document.createElement('div');
                newCell.className = 'gridSquare';
                newCell.addEventListener('mouseover', changeColor);
                newRow.appendChild(newCell);
            }
        etcha.appendChild(newRow);
    }
}

function changeColor() {
  this.style.backgroundColor = 'black';
}
