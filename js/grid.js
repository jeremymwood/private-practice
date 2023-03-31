
let rows = 5;
let cols = 18;

function makeGrid() {
    const container = document.getElementById("container");

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
    // document.getElementById(container).innerHTML = fcHtmlModal;
}

makeGrid();

//submit connected
//adds rows, but soes not replace
$(document).keyup(function(event) {
    if ($(`#rowInput`).is(":focus") && event.key === "Enter") {
        rowUpdate ();
    }
});

function rowUpdate () {
    let value = $("#rowInput").val();
    console.log(value);
    rows = value;

    if ($(`#container`).find(`.row-container`) !== null) {
        $(`#container`).find(`.row-container`).remove();
        makeGrid();
    }
};