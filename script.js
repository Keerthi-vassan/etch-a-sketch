const sketchpad = document.querySelector('div.sketchpad');

const b25 = document.querySelector('#g25');
const b50 = document.querySelector('#g50');
const b100 = document.querySelector('#g100');
const customButton = document.querySelector('#custom');

b25.addEventListener('click', () => { createGrid(25); });
b50.addEventListener('click', () => { createGrid(50); });
b100.addEventListener('click', () => { createGrid(100); });
customButton.addEventListener('click', () => {
    let size = prompt("Enter grid size (between 1 and 100):");
    size = parseInt(size);
    if (size >= 1 && size <= 100) {
        createGrid(size);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

function createGrid(size) {
    sketchpad.innerHTML = ''; 
    sketchpad.style.display = 'flex';
    sketchpad.style.flexDirection = 'column';
    sketchpad.style.width = '700px';
    sketchpad.style.height = '700px';

    for (let row = 0; row < size; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        rowDiv.style.display = 'flex';
        rowDiv.style.flex = '1';

        for (let col = 0; col < size; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.flex = '1'; 
            cell.addEventListener('mouseenter', () => {
                let color = cell.style.backgroundColor;

                // Set random color if the cell has no background color
                if (!color || color === 'white') {
                    cell.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                    cell.style.opacity = '0.1';
                }

                // Increase opacity gradually
                let opacity = parseFloat(cell.style.opacity);
                if (opacity < 1) {
                    cell.style.opacity = (opacity + 0.1).toString();
                }
            });
            rowDiv.appendChild(cell);     
        }
        sketchpad.appendChild(rowDiv);
    }
}


