

const container = document.getElementById("container");

const rowInput = document.getElementById("rowInput");

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
    // document.getElementById(modalOptionsId).innerHTML = fcHtmlModal;

}

// let cell = document.createElement("button");
// // work on depressed state
// cell.addEventListener("click", cell.appendChild().className = "grid-selected";)

makeGrid(6, 18);

//submit connected
$('.btn').click(function () {
    var value = $("#rowInput").val();
    console.log(value);
});


// function myFunction() {
//     var x = document.getElementById("myNumber").value;
//     document.getElementById("demo").innerHTML = x;
// }
//
// function returnRow(){
//     let input = document.getElementById("rowInput").value;
//     // alert(input);
//     console.log(input);
// }
// returnRow();
// makeGrid(returnRow(), 18);
