const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset');

let light = [];
makeGrid(16);

resetButton.addEventListener('click', (e) => resetGrid(prompt('Choose the resolution for a new grid!')));

function makeGrid(resolution) {
    for (let y = 0; y < resolution; y++) {
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let x = 0; x < resolution; x++) {
            let column  = document.createElement('div');
            column.classList.add('gridItem', 'column');
            row.appendChild(column);
            let pixelSize = (window.innerHeight - 200) / resolution;
            column.style.width = `${pixelSize}px`;
            column.style.height = `${pixelSize}px`;
        }
    }
    recolorGridItems();
}

function recolorItem (item, index) {
    // RANDOM COLOR FOR BACKGROUND OF EVERY MOUSEOVER ELEMENTS
    //item.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    light[index] -= 10;
    item.target.style.backgroundColor = `hsl(0, 0%, ${light[index]}%)`;
    if (light[index] < 0) {
        light[index] = 0;
    }
}

function resetGrid (resolution) {
    if (resolution > 100) {
        alert('maximum number is set to 100, try again!');
        return;
    } else if (resolution < 1) {
        alert('minimum number is set to 1, try again!');
        return;
    }
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    };
    makeGrid(resolution);
}
function recolorGridItems() {
    const gridItems = document.querySelectorAll('.gridItem');
    gridItems.forEach((item, index) => {
        light[index] = 100;
        item.addEventListener('mouseover', (e) => recolorItem(e, index))
    });
};