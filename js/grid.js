let rows = 6;
let cols = 16;

makeGrid = function () {
    const container = document.getElementById("container");

    for (let i = 0; i < (rows); i++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "row-container";

        for (let j = 0; j < (cols); j++) {
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