const container = document.getElementById("container");

function makeGrid(rows, cols) {
    for (let i = 0; i < (rows); i++) {
        let row = document.createElement("div");
        // row.innerText = i + 1;
        container.appendChild(row).className = "row-container";

        for (let j = 0; j < (cols); j++) {
            let cell = document.createElement("button");

            // cell.innerText = j + 1;
            row.appendChild(cell).className = "grid-item";
            // );
        }
    }
}
// let cell = document.createElement("button");
// // work on depressed state
// cell.addEventListener("click", cell.appendChild().className = "grid-selected";)

makeGrid(6, 18);