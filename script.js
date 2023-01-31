const container = document.querySelector('.container');

function makeGrid(columns, rows) {
    console.log(columns + ', ' + rows);
    const array = new Array;
    for (let y = 0; y < rows; y++) {
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let x = 0; x < columns; x++) {
            let column  = document.createElement('div');
            column.classList.add('gridItem', 'column');
            row.appendChild(column);
        }
    }
    return array;
}

makeGrid(16,16);