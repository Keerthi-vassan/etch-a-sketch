const sketchpad = document.querySelector('div.sketchpad');

const b25 = document.querySelector('#g25');
const b50 = document.querySelector('#g50');
const b100 = document.querySelector('#g100');

b25.addEventListener('click', () => { createGrid(25); });
b50.addEventListener('click', () => { createGrid(50); });
b100.addEventListener('click', () => { createGrid(100); });

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
            cell.style.flex = '1'; // Use flex-grow to dynamically adjust cell size';
            cell.addEventListener('mouseenter', () => {
                cell.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            });
            rowDiv.appendChild(cell);
        }
        sketchpad.appendChild(rowDiv);
    }
}

