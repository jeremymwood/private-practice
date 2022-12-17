const container = document.getElementById("container");

function makeGrid(rows, cols) {
    for (let i = 0; i < (rows); i++) {
        let row = document.createElement("div");
        // row.innerText = i + 1;
        container.appendChild(row).className = "row-container";

        for (let j = 0; j < (cols); j++) {
            let cell = document.createElement("div");
            // cell.innerText = j + 1;
            row.appendChild(cell).className = "grid-item";
        }
    }
}

makeGrid(10, 16);
