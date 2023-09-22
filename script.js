var size = 16;
const gridContainer = document.getElementById("grid-container");

// function createGrid(size) {
//     removeGrid();
//     for (i=0; i<size; ++i) {
//         var column = document.createElement("div");
//         column.className = "column";
//         column.style.width = 600/size + "px";
//         column.style.height = 600/size + "px";
//         for (j=0; j<size; ++j) {
//             var cell = document.createElement("div");
//             cell.className = "cell";
//             cell.style.width = 600/size + "px";
//             cell.style.height = 600/size + "px";
//             column.appendChild(cell);
//         }
//         gridContainer.appendChild(column);
//     paintCells();
//     }
// }

function createGrid(size) {
    removeGrid();
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div')
      gridElement.classList.add('cell')
    //   gridElement.addEventListener('mouseover', changeColor)
    //   gridElement.addEventListener('mousedown', changeColor)
    gridContainer.appendChild(gridElement)
    }
    paintCells();
  }

function getRandomColour() {
    const randomColour = "#" + Math.floor(Math.random()*16777215).toString(16);
    return randomColour;
}

function paintCells() {
    const gridItems = document.querySelectorAll('#grid-container > div');

    gridItems.forEach((item) => {
        const gridItem = item;
        gridItem.addEventListener('mouseover', (e) => {
            let randomColour = getRandomColour();
            e.target.style.backgroundColor = randomColour;
        })
    })
}

function removeGrid() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function changeSize() {
    let newSize = prompt("Enter New Size");

    if (isNaN(newSize)) {
        window.alert("Enter a positive integer (Max. 100)");
        return;
    } else if (newSize <= 0) {
        window.alert("Enter a positive integer (Max. 100)");
        return;
    } else if (newSize > 100) {
        window.alert("Enter a positive integer (Max. 100)");
        return;
    }

    createGrid(newSize)
}

const changeSizeBtn = document.getElementById("change-size");
changeSizeBtn.addEventListener('click', changeSize)

createGrid(size);

