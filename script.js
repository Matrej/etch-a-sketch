const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset');

function makeGrid(columns, rows) {
    for (let y = 0; y < rows; y++) {
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let x = 0; x < columns; x++) {
            let column  = document.createElement('div');
            column.classList.add('gridItem', 'column');
            row.appendChild(column);
            column.style.width = `${window.innerWidth / columns}px`;
            column.style.height = `${(window.innerHeight - 150) / rows}px`;
        }
    }
    recolorGridItems();
}

let light = [];
makeGrid(16,16);

function recolorItem (item, index) {
    //item.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    item.target.style.backgroundColor = `hsl(0, 0%, ${light[index]}%)`;
    light[index] -= 10;
    if (light[index] < 0) {
        light[index] = 0;
    }
}
resetButton.addEventListener('click', (e) => resetGrid(prompt('how many columns?'),prompt('how many rows?')));

function resetGrid (numColumns, numRows) {
    if (numColumns >= 100 || numRows >= 100) {
        alert('maximum number is set to 100, try again!');
        return;
    }
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    };
    makeGrid(numColumns, numRows);
}
function recolorGridItems() {
    const gridItems = document.querySelectorAll('.gridItem');
    gridItems.forEach((item, index) => {
        light[index] = 100;
        item.addEventListener('mouseover', (e) => recolorItem(e, index))
    });
};
