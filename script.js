var size = 16;

function createGrid(size) {
    const gridContainer = document.getElementById("grid-container");

    for (i=0; i<size; ++i) {
        var column = document.createElement("div");
        column.className = "column";
        column.style.width = 600/size + "px";
        column.style.height = 600/size + "px";
        for (j=0; j<size; ++j) {
            var row = document.createElement("div");
            row.className = "row";
            row.style.width = 600/size + "px";
            row.style.height = 600/size + "px";
            column.appendChild(row);
        }
        gridContainer.appendChild(column);
}
}

function paintCells() {
    const gridItems = document.querySelectorAll('#grid-container > div');

    gridItems.forEach((item) => {
        const gridItem = item;
        gridItem.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "black";
        })
    })
}

createGrid(size);
paintCells();

