let rows = 6;
let cols = 16;

makeGrid = function () {
    const container = document.getElementById("container");

    for (let i = 0; i < rows; i++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "row-container";

        for (let j = 0; j < cols; j++) {
            let cell = document.createElement("button");
            row.appendChild(cell).className = "grid-item";
        }
    }
}

makeGrid();

gridUpdate = function () {
    let rowValue = $("#rowInput").val();
    let colValue = $("#colInput").val();
    rows = rowValue;
    cols = colValue;

    if ($(`#container`).find(`.row-container`) !== null) {
        $(`.row-container`).remove();
        makeGrid();
    }
};
$(document).keyup(function(event) {
    if ($(`#rowInput`).is(":focus") || $(`#colInput`).is(":focus") && event.key === "Enter") {
        gridUpdate ();
    }
});

const rowQ = 10;
const colQ = 10;
makeRowSelector = function () {
    const selectors = document.getElementById("selectors");
    let rowInput = document.createElement("div");
    let colInput = document.createElement("div");
    selectors.appendChild(rowInput).className = "row-selector-container";
    selectors.appendChild(colInput).className = "col-selector-container";

    for (let i = 0; i < rowQ; i++) {
        let cell = document.createElement("button");
        // cell.innerText(i+1);
        // $(`${cell}`).innerText(i+1)
        rowInput.appendChild(cell).className = "grid-item";
    }

    // for (let j = 0; j < colQ; j++) {
    //     let cell = document.createElement("button");
    //     cell.innerHTML(j+1);
    //     colInput.appendChild(cell).className = "grid-item";
    // }


}
makeRowSelector ();